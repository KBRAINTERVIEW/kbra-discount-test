import * as HttpStatus from "http-status-codes";
import * as Koa from "koa";
import { birthdayRepository } from "./Repository/birthdayRepository";
import { cache } from "./cache";
import { emailRepository } from "./Repository/emailRepository";
import { fullNameCalculator } from "./fullNameCalculator";
import { mlogger } from "./mlogger";

const todaysDate = "01/01/1990";

export default {
  async get(ctx: Koa.Context): Promise<Koa.Context> {
    const { userId, discountCode } = ctx.params;

    mlogger.info(
      `Getting Discount for userId: ${userId}, discountCode: ${discountCode}`
    );

    if (cache.has(userId + discountCode)) {
      ctx.body = cache.get(userId + discountCode);
      return ctx;
    }

    let discountPercent = 0;

    try {
      const birthday = birthdayRepository.fetch(userId);

      if (birthday === todaysDate) {
        discountPercent += 2;
      }

      if (discountCode == "TEN") {
        discountPercent += 10;
      }

      if (discountCode == "FIVE") {
        discountPercent += 5;
      }

      ctx.body = {
        discountPercent,
        birthday,
        email: emailRepository.fetch(userId),
        user: fullNameCalculator.fetch(userId)
      };
    } catch (error) {
      mlogger.error(error);
      ctx.throw(HttpStatus.BAD_REQUEST, "Something Went Wrong");
    }
    return ctx;
  }
};

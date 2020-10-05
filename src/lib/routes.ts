import Router from "koa-router";
import discountController from "../discount/controller";

export default function routes(): Router {
  const router = new Router();

  router.get("/discount/:userId/:discountCode", async ctx => {
    await discountController.get(ctx);
  });

  return router;
}

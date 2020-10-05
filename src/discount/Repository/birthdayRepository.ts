import { cache } from "discount/cache";
import { users } from "./users";

export const birthdayRepository = {
  fetch: (userId: number): string => {
    if (cache.has(userId)) {
      return cache.get(userId);
    }

    return users[userId].birthday;
  }
};

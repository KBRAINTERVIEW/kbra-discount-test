import { cache } from "discount/cache";
import { users } from "./users";

export const firstNameRepository = {
  fetch: (userId: number): string => {
    if (cache.has(userId)) {
      return cache.get(userId);
    }

    return users[userId].firstName;
  }
};

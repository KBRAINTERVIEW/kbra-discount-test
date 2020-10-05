import { cache } from "discount/cache";
import { emails } from "./users";

export const emailRepository = {
  fetch: (userId: number): string => {
    if (cache.has(userId)) {
      return cache.get(userId);
    }

    emails[userId];
  }
};

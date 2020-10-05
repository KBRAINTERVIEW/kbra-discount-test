import { lastNameRepository } from "./Repository/lastNameRepository";
import { firstNameRepository } from "./Repository/firstNameRepository";
import { cache } from "./cache";

export const fullNameCalculator = {
  fetch: (userId: number): string => {
    if (cache.has(userId)) {
      return cache.get(userId);
    }

    const firstName = firstNameRepository.fetch(userId);
    const lastName = lastNameRepository.fetch(userId);

    return firstName + " " + lastName;
  }
};

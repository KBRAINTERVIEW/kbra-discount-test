import { lastNameRepository } from "./Repository/lastNameRepository";
import { firstNameRepository } from "./Repository/firstNameRepository";

export const fullNameCalculator = {
  fetch: (userId: number): string => {
    const firstName = firstNameRepository.fetch(userId);
    const lastName = lastNameRepository.fetch(userId);
    return firstName + " " + lastName;
  }
};

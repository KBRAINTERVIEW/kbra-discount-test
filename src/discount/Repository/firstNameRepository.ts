export const firstNameRepository = {
  fetch: (userId: number): string => {
    if (userId == 1) {
      return "Jane";
    } else {
      return "John";
    }
  }
};

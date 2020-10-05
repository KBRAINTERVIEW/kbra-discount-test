export const birthdayRepository = {
  fetch: (userId: number): string => {
    if (userId == 1) {
      return "01/01/1990";
    } else {
      return "12/01/1990";
    }
  }
};

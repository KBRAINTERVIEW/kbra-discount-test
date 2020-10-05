export const emailRepository = {
  fetch: (userId: number): string => {
    if (userId == 1) {
      return "JaneDoe@abc.com";
    } else {
      return "JohnDoe@abc.com";
    }
  }
};

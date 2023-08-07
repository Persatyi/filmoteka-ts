export const dateConverter = (date: string) => {
  if (date) {
    return new Date(date).getFullYear();
  } else {
    return "";
  }
};

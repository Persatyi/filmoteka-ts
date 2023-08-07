export const posterPath = (path: String | undefined) => {
  if (path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  } else {
    return require("../assets/images/noImage.jpg");
  }
};

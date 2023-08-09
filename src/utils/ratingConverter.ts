export const ratingHeandler = (vote_average: number) => {
  let rating = "0.0";
  if (String(vote_average)?.length === 1) {
    return vote_average + ".0";
  } else {
    return vote_average === 10 ? "10.0" : String(vote_average).slice(0, 3);
  }
};

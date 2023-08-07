import { get, genresKey } from "localStorage/localStorage";

export const genresHeandler = (genre_ids: number[]): string => {
  const { genres } = get(genresKey);
  if (genre_ids) {
    return (
      genre_ids
        .filter((id) => genres[id])
        .map((id) => genres[id].name)
        .join(", ") || "Genre is not specified"
    );
  } else {
    return "Genre is not specified";
  }
};

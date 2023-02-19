export function fetchPopular() {
  return fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=bb3168696e35626f9e0ec9a6cc22697e"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
}

export function fetchGenres() {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=bb3168696e35626f9e0ec9a6cc22697e"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    return response.json();
  });
}

interface IInitialData {
  results: [];
  page: number;
  totalPages: number;
}

export const results = (state: IInitialData) => state.results;

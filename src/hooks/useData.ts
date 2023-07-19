import { useAppSelector } from "./hooks";

export function useData() {
  const { mode, page, query, isLoading } = useAppSelector(
    (state) => state.dataReducer
  );

  return { mode, page, query, isLoading };
}

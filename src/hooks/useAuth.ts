import { useAppSelector } from "./hooks";

export function useAuth() {
  const { email, id, name } = useAppSelector((state) => state.userReducer);

  return {
    isAuth: !!email,
    email,
    id,
    name,
  };
}

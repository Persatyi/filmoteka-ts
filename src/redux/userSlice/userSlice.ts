import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  email: string | null;
  id: string | null;
  name: string | null;
  userLoading: boolean;
}

const initialState = {
  email: null,
  id: null,
  name: null,
  userLoading: false,
} as IInitialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.id = payload.id;
      state.name = payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.name = null;
    },
    setUserLoader(state, { payload }) {
      state.userLoading = payload;
    },
  },
});

export const { setUser, removeUser, setUserLoader } = userSlice.actions;

export const userReducer = userSlice.reducer;

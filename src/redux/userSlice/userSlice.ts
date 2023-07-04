import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  email: string | null;
  token: string | null;
  id: string | null;
  name: string | null;
}

const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
} as IInitialState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
      state.name = payload.name;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;

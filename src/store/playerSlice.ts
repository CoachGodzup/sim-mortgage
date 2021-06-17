import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Player from "../models/player";

export const playerSlice = createSlice({
  name: "player",
  initialState: [] as Player[],
  reducers: {
    createPlayer: (state, action: PayloadAction<Player>) => {
      return [...state, action.payload];
    },
    updatePlayer: (state, action: PayloadAction<Player>) => {
      return state.map((elm) =>
        elm.id === action.payload.id ? action.payload : elm
      );
    },
    removePlayer: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((elm) => elm.id !== action.payload.id);
    },
  },
});

export const { createPlayer, updatePlayer, removePlayer } = playerSlice.actions;

export default playerSlice.reducer;

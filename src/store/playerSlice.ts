import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: 'player',
  initialState: [],
  reducers: {
    addPlayer: (state, action) => {
      // TODO
    },
    updatePlayer: (state, action) => {
      // TODO
    } 
  }
})

export const {addPlayer, updatePlayer} = playerSlice.actions

export default playerSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.some((el) => action.payload.id === el.id)) {
        alert("이미 선택된 포켓몬입니다.");
        return;
      }
      if (state.length === 6) {
        alert("6개");
        return;
      }
      state.push(action.payload);
    },

    removePokemon: (state, action) => {
      return state.filter((el) => {
        return el.id !== action.payload.id;
      });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

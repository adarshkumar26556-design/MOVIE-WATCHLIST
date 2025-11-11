import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    watchlist: [],
  },
  reducers: {
    addMovie: (state, action) => {
      const newMovie = { id: Date.now(), ...action.payload };
      state.allMovies.push(newMovie);
    },
    removeMovie: (state, action) => {
      state.allMovies = state.allMovies.filter((m) => m.id !== action.payload);
      state.watchlist = state.watchlist.filter((m) => m.id !== action.payload);
    },
    addToWatchlist: (state, action) => {
      const movie = state.allMovies.find((m) => m.id === action.payload);
      if (movie && !state.watchlist.some((m) => m.id === movie.id)) {
        state.watchlist.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter((m) => m.id !== action.payload);
    },
  },
});

export const {
  addMovie,
  removeMovie,
  addToWatchlist,
  removeFromWatchlist,
} = movieSlice.actions;

export default movieSlice.reducer;

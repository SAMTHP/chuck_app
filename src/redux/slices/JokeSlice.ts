import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Joke } from "../../api/model/Joke";
import { JokeService } from "../../api/services/JokeService";
import type { RootState } from "../store";

// Define a type for the slice state
interface JokeInfoSliceState {
    loading: boolean;
    jokes: Joke[];
    selectedCategory?: string;
    selectedJokes: Joke[];
}

const initialState: JokeInfoSliceState = {
    loading: false,
    jokes: [],
    selectedJokes: [],
    selectedCategory: undefined
};

export const fetchJokes = createAsyncThunk("fetchJokes", async () =>
    JokeService.allJokes()
);

export const jokeSlice = createSlice({
    name: "jokeSlice",
    initialState,

    reducers: {
        onCategoryChange: (state, action) => {
            state.selectedCategory = action.payload;
        },

        onSelectedJokes: (state, action) => {
            state.selectedJokes = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchJokes.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchJokes.fulfilled, (state, action) => {
            if (action.payload) state.jokes = action.payload.result;
        });

        builder.addCase(fetchJokes.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { onCategoryChange, onSelectedJokes } =
    jokeSlice.actions;
export const JokesSelector = (state: RootState) =>
    state.jokeInfo.jokes;
    export const selectedJokesSelector = (state: RootState) =>
    state.jokeInfo.selectedJokes;
export const JokeILoadingSelector = (state: RootState) =>
    state.jokeInfo.loading;
export const selectedCategorySelector = (state: RootState) =>
    state.jokeInfo.selectedCategory;
export default jokeSlice.reducer;

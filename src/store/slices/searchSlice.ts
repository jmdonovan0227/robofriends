import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchBoxState {
    searchField: string;
};

const initialState : SearchBoxState = {
    searchField: ''
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchField: (state, action: PayloadAction<string>) => {
            state.searchField = action.payload;
        }
    }
});

export const { setSearchField } = searchSlice.actions;

export default searchSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IRobot {
    name: string,
    id: number,
    email: string
};

interface RobotsState {
    isPending: boolean,
    contents: Array<IRobot>,
    error: string
};

const initialState : RobotsState = {
    isPending: false,
    contents: new Array<IRobot>(),
    error: ''
};

// Action
export const fetchRobots = createAsyncThunk('robots/fetchRobots', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return data as Array<IRobot>;
});

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRobots.pending, (state) => {
            state.isPending = true;
        })
        .addCase(fetchRobots.fulfilled, (state, action) => {
            state.contents = action.payload;
            state.isPending = false;
        })
        .addCase(fetchRobots.rejected, (state, action) => {
            state.isPending = false;
            state.error = `${action.error}` || "error fetching robots";
        })
    }
});

export default robotsSlice.reducer;
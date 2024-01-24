// Define type of state
interface CounterState {
    value: number;
}

// Define Initial State
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CounterState = {
    value: 0,
};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(decrementAsync.pending, () => {
            console.log('decrementAsync.pending')
        })
        builder.addCase(incrementAsync.pending, () => {
            console.log('incrementAsync.pending')
        })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            })
            .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value -= action.payload;
            })
    },
});

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return amount;
    }
);
export const decrementAsync = createAsyncThunk(
    'counter/decrementAsync',
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return amount;
    }
);

export const {increment, decrement, incrementByAmount, decrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;
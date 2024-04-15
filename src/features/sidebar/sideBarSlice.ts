import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateProps = {
    open: boolean;
};

const initialState: StateProps = {
    open: true,
};

const OpenSlice = createSlice({
    name: "open",
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.open = action.payload;
        },
    },
});

export const { setOpen } = OpenSlice.actions;
export default OpenSlice.reducer;

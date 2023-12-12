import {createSlice} from "@reduxjs/toolkit";

const initialViewState = {
    isViewDisplayed: false,
    selectedView: null,
}

const viewSlice = createSlice({
    name: 'view',
    initialState: initialViewState,
    reducers: {
        toggleView(state, action) {
            const { payload } = action;
            state.isViewDisplayed = state.selectedView !== payload;
            state.selectedView = state.isViewDisplayed ? payload : null;
        }
    }
});

export const viewActions = viewSlice.actions;

export default viewSlice.reducer;
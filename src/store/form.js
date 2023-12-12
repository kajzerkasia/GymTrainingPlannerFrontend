import {createSlice} from "@reduxjs/toolkit";

const initialFormState = {
    isAddFormOpen: false,
    selectedForm: null,
}

const formSlice = createSlice({
    name: 'form',
    initialState: initialFormState,
    reducers: {
        toggleForm(state, action) {
            const { payload } = action;
            state.isAddFormOpen = state.selectedForm !== payload;
            state.selectedForm = state.isAddFormOpen ? payload : null;
        }
    }
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Book {
    id: string;
    title: string;
    comment: string
}

interface FavoritesState {
    commented: Book[]
}

const initialState: FavoritesState = {
    commented: []
};

const commentedSlice = createSlice({
    name: 'commented',
    initialState,
    reducers: {
        addToCommented: (state, action: PayloadAction<Book>) => {
            state.commented.push(action.payload);
        },
        removeFromCommented: (state, action: PayloadAction<string>) => {
            state.commented = state.commented.filter(book => book.id !== action.payload);
        },
        clearCommented: (state) => {
            state.commented = [];
        },
    },
});

export const {addToCommented, removeFromCommented, clearCommented} = commentedSlice.actions;
export default commentedSlice.reducer;

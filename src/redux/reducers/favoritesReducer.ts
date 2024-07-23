// src/redux/favoritesSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Definir la estructura de un libro
interface Book {
    id: string;
    title: string;
}

// Definir el estado inicial
interface FavoritesState {
    favorites: Book[];
    commented: Book[]
}

const initialState: FavoritesState = {
    favorites: [],
    commented: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<Book>) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(book => book.id !== action.payload);
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

const commentedSlice = createSlice({
    name: 'commented',
    initialState,
    reducers: {
        addCommented: (state, action: PayloadAction<Book>) => {
            state.favorites.push(action.payload);
        },
        removeFromCommented: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(book => book.id !== action.payload);
        },
        clearCommented: (state) => {
            state.favorites = [];
        },
    },
});

export const {addToFavorites, removeFromFavorites, clearFavorites} = favoritesSlice.actions;
export const {addCommented, removeFromCommented, clearCommented} = commentedSlice.actions;
export default favoritesSlice.reducer;

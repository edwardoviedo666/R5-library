// src/redux/actions.js

import {IBook} from "../../models/Book";

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';

export const addToFavorites = (book: IBook) => ({
    type: ADD_TO_FAVORITES,
    payload: book,
});

export const removeFromFavorites = (bookId: string) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: bookId,
});

export const clearFavorites = () => ({
    type: CLEAR_FAVORITES,
});

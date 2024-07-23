import {combineReducers} from 'redux';
import favoritesReducer from './favoritesReducer';
import commentedReducer from "./commentedReducer";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    commented: commentedReducer
});

export default rootReducer;

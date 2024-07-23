import React, {useState} from 'react'
import {IBook} from "../../models/Book";
import {Book} from "../Book";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../../redux/reducers/favoritesReducer";
import {addToCommented} from "../../redux/reducers/commentedReducer";
import {ADD_TO_FAVORITE, DELETE_TO_FAVORITE} from "../../utils/constants";


export interface BooksProps {
    books: IBook[],
    preferencesBook?: boolean
}

const Books = ({books, preferencesBook = false}: BooksProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state['favorites'].favorites);
    const [textFavorites, setTextFavorite] = useState(ADD_TO_FAVORITE)

    const handleAddToFavorites = (book) => {
        dispatch(addToFavorites(book));
    };

    const handleRemoveFromFavorites = (bookId) => {
        dispatch(removeFromFavorites(bookId));
    };
    const handleAddComment = (book, comment) => {
        const newBook: IBook = {
            id: book.id,
            author: "",
            description: "",
            image: "",
            title: book.title,
            comment: comment
        }
        dispatch(addToCommented(newBook));
    }
    return (
        <div>
            {books?.map((book, index) => {
                return (
                    <Book
                        addToFavorite={favorites.filter(obj => obj.id === book.id).length > 0 ? DELETE_TO_FAVORITE : textFavorites}
                        key={index} book={book}
                        onClick={_ => favorites.filter(obj => obj.id === book.id).length > 0 ? handleRemoveFromFavorites(book.id) : handleAddToFavorites(book)}
                        onClickAddComment={(book, textareaValue) => handleAddComment(book, textareaValue)}
                        preferencesBook={preferencesBook}
                    />
                )
            })}
        </div>
    )
}

export default Books

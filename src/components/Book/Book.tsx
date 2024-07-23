import React, {MouseEventHandler, useState} from 'react'
import {IBook} from "../../models/Book";
import {DEFAULT_IMAGE} from "../../utils/constants";
import './book.css'


export interface BookProps {
    addToFavorite: string
    book: IBook
    key: number | string
    onClick: MouseEventHandler<HTMLButtonElement>,
    onClickAddComment: any
    preferencesBook: boolean
}

const Book = ({key, book, addToFavorite, onClick, onClickAddComment, preferencesBook = false}: BookProps) => {
    const [textareaValue, setTextareaValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setTextareaValue(newValue);
    };

    return (
        <div key={key} className="book">
            <div className="book-image">
                {book.image ? <img
                        alt={book.title}
                        src={book.image}/>
                    : <img src={DEFAULT_IMAGE} alt="default"/>}
            </div>
            {preferencesBook ?
                (
                    <>
                        <button className="book-add-favorite" onClick={onClick}>{addToFavorite}</button>
                        <div className="book-add-comment">
                            <textarea value={textareaValue} onChange={handleChange}/>
                            <button className="book-add-favorite"
                                    onClick={_ => onClickAddComment(book, textareaValue)}>Agregar
                                comentario
                            </button>
                        </div>
                    </>
                ) : null}


            <p className="book-title">{book.title}</p>
        </div>
    )
}

export default Book

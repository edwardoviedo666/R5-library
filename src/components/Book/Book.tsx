import React from 'react'
import {IBook} from "../../models/Book";
import {DEFAULT_IMAGE} from "../../utils/constants";
import './book.css'


export interface BookProps {
    book: IBook
    key: number | string
}

const Book = ({key, book}: BookProps) => (
    <div key={key} className="book">
        <div className="book-image">
            {book.image ? <img
                    alt={book.title}
                    src={book.image}/>
                : <img src={DEFAULT_IMAGE} alt="default"/>}
        </div>
        <p className="book-title">{book.title}</p>
    </div>
)

export default Book

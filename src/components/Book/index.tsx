import React from 'react'
import './book.css'
import {IBook} from "../../models/Book";

export type BookType = {
    id: string
    volumeInfo: {
        title: string
        imageLinks: {
            thumbnail: string
        }
    }
}

export interface BookProps {
    book: IBook
}

const Book = ({book}: BookProps) => (
    <div id={book.id as string} className="book">
        <div className="book-image">
            {book.image ? <img
                    alt={book.title}
                    src={book.image}/>
                : <img src="https://picsum.photos/200/260" alt="default"/>}
        </div>
        <p className="book-title">{book.title}</p>
    </div>
)

export default Book

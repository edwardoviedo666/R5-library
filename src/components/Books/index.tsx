import React from 'react'
import Book, {BookType} from '../Book'
import './books.css'
import {IBook} from "../../models/Book";

export interface BooksProps {
    books: IBook[]
}

const Books = ({books}: BooksProps) => {
    return (
        <div className="books">
            {books.map(book => <Book key={book.id as string} book={book}/>)}
        </div>
    )
}

export default Books

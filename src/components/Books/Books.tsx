import React from 'react'
import {IBook} from "../../models/Book";
import {Book} from "../Book";

export interface BooksProps {
    books: IBook[],
}

const Books = ({books}: BooksProps) => {
    return (
        <div>
            {books?.map((book, index) => {
                return (
                    <Book key={index} book={book}/>
                )
            })}
        </div>
    )
}

export default Books

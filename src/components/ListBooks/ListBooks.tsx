import React from 'react'
import {Books} from "../Books";
import {IBook} from "../../models/Book";
import books from "../Books/Books";

interface ListBooks {
    sectionTitle: string
    listBooks: IBook[]
    isLoading: boolean
    preferencesBook?: boolean
}

const ListBooks = ({sectionTitle, listBooks, isLoading, preferencesBook = false}: ListBooks) => {
    return (
        <section className="section-lis-books">
            {isLoading && <p>Cargando...</p>}
            <p>{sectionTitle}</p>
            <Books books={listBooks} preferencesBook={preferencesBook}/>
        </section>
    )
}
export default ListBooks
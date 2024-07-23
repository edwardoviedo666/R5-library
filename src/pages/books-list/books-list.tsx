import SearchInput from "../../components/SearchInput";
import React, {useEffect, useState} from "react";
import {Books} from "../../components/Books";
import {useBooksByTitle} from "../../hooks/books-list/useBooksByTitle";
import "../../assets/styles/general.css"

const BooksList = () => {
    const [searchValue, setSearchValue] = React.useState("")
    const [newSearch, setNewSearch] = React.useState("")
    const {listBooks, loading, error} = useBooksByTitle(newSearch)
    useEffect(() => {
        setNewSearch("javascript")
    }, []);

    const handleSearch = () => {
        debugger
        setNewSearch(searchValue)
    }
    return (
        <div>
            <SearchInput title="GOOGLE BOOKS" value={searchValue} setSearchValue={setSearchValue}
                         handleSearch={handleSearch}/>
            <section className="section-lis-books">
                {loading && <p>Cargando...</p>}
                {listBooks && <Books books={listBooks}/>}
            </section>
        </div>
    )
}
export default BooksList
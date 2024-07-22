import React, {useEffect} from "react";
import {useBooksByTitle} from "../../hooks/books-details/useBooksByTitle";
import SearchInput from "../../components/SearchInput";
import {Books} from "../../components/Books";

const BooksList = () => {
    const [searchValue, setSearchValue] = React.useState("")
    const [newSearch, setNewSearch] = React.useState("")
    const {books, loading, error} = useBooksByTitle(newSearch)
    useEffect(() => {
        setNewSearch("javascript")
    }, []);

    const handleSearch = () => {
        debugger
        setNewSearch(searchValue)
    }
    return (
        <div>
            <SearchInput value={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
            <section className="section-lis-books">
                {loading && <p>Cargando...</p>}
                {books && <Books books={books}/>}
            </section>
        </div>
    )
}
export default BooksList
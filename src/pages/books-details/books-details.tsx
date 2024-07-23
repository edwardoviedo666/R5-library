import React, {useEffect} from "react";
import SearchInput from "../../components/SearchInput";
import {useOpenBooksByTitle} from "../../hooks/books-details/useBooksByTitle";
import {useSelector} from "react-redux";
import Comments from "../../components/Comments/Comments";
import ListBooks from "../../components/ListBooks/ListBooks";


const BooksDetails = () => {

    const [searchValue, setSearchValue] = React.useState("")
    const [newSearch, setNewSearch] = React.useState("")
    const {listBooks, loading, error} = useOpenBooksByTitle(newSearch)
    const favorites = useSelector((state) => state.favorites.favorites);
    const commented = useSelector((state) => state.commented.commented);
    useEffect(() => {
        setNewSearch("javascript")
    }, []);

    const handleSearch = () => {
        debugger
        setNewSearch(searchValue)
    }

    return (
        <div>
            <SearchInput title="OPEN BOOKS" value={searchValue} setSearchValue={setSearchValue}
                         handleSearch={handleSearch}/>

            <section className="section-lis-books">
                {commented.length > 0 && (
                    <>
                        <p>Libros con Comentarios</p>
                        <Comments/>
                    </>
                )}
            </section>

            {favorites.length > 0 && (
                <ListBooks sectionTitle="Favoritos" listBooks={favorites} isLoading={loading} />
            )}
            <br/>
            <ListBooks sectionTitle="" listBooks={listBooks} isLoading={loading} preferencesBook/>

        </div>
    )
}
export default BooksDetails
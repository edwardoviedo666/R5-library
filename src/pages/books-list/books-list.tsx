import SearchInput from "../../components/SearchInput";
import Books from "../../components/Books";
import {BookType} from "../../components/Book";
import React, {useState} from "react";
import {getBookByTitle} from "../../services/bookService";
import {API_BASE_URL_GOOGLE} from "../../utils/constants";
import {IBook} from "../../models/Book";


interface Response {
    data?: {
        items: BookType[]
    }
}

const BooksList = () => {
    const [searchValue, setSearchValue] = React.useState("")

    const [response, setResponse] = useState<IBook[]>()
    const handleSearch = async () => {
        const listBooks = await getBookByTitle(API_BASE_URL_GOOGLE, searchValue)
        console.log("listado de libros: ", listBooks)
        setResponse(listBooks)

    }
    return (
        <div>
            <SearchInput value={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
            {response && <Books books={response}/>}
        </div>
    )
}
export default BooksList
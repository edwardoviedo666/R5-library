import React, {ChangeEvent, MouseEventHandler} from 'react'
import axios from 'axios'
import './SearchInput.css'

interface SearchInputProps {
    setSearchValue: Function,
    value: string
    handleSearch: MouseEventHandler<HTMLButtonElement>
}

const SearchInput = ({value, setSearchValue, handleSearch}: SearchInputProps) => {

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSearchValue(event.target.value)
    }

    /*  function getBooks(title: string = 'javascript') {
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`)
              .then((response) => setResponse(response))
      }*/
    return (
        <div className="search">
            <h1>GOOGLE BOOKS</h1>
            <input
                className="search-input"
                type="text"
                placeholder="Buscar un libro"
                value={value}
                onChange={handleInputChange}
            />
            <button className="search-button" onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchInput

import SearchInput from "../../components/SearchInput";
import Books from "../../components/Books";
import {BookType} from "../../components/Book";
import {useState} from "react";


interface Response {
    data?: {
        items: BookType[]
    }
}

const BooksList = () => {
    const [response, setResponse] = useState<Response>({})
    return (
        <div>
            <SearchInput setResponse={setResponse}/>
            {response.data && <Books books={response.data.items}/>}
        </div>
    )
}
export default BooksList
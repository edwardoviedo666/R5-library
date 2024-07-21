import React from 'react'
import {BookType} from "./components/Book";
import AppRoutes from "./routes/app-routes";


/*
interface Response {
    data?: {
        items: BookType[]
    }
}
*/

const App = () => {
    //const [response, setResponse] = React.useState<Response>({})
    return (
        <AppRoutes/>
        /*<div>
          <SearchInput setResponse={setResponse} />
        {response.data && <Books books={response.data.items} /> }
        </div>*/
    )
}


export default App

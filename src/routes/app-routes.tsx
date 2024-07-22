import {BrowserRouter, Route, Routes} from "react-router-dom";
import BooksList from "../pages/books-list/books-list";
import BooksDetails from "../pages/books-details/books-details";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BooksList/>}/>
                <Route path="/bookStore" element={<BooksDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes
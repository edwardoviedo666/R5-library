import {BrowserRouter, Route, Routes} from "react-router-dom";
import BooksList from "../pages/books-list/books-list";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BooksList/>}/>
                <Route path="/bookStore" element={<h1>Ruta hija</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes
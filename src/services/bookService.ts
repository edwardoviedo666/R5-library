import axios, {AxiosResponse} from "axios";
import {IBook} from "../models/Book";
import {mapApiToBooks} from "../utils/mappers";

const API_URL = `/books`;

const handleResponse = <T>(response: AxiosResponse<T>): T => {
    return response.data;
};


const handleError = (error: any): never => {
    console.error("API call error: ", error)
    throw error
}

const getBookByTitle = async (url: string, title: string = "javascript"): Promise<[]> => {
    try {
        const URL = url.replace("{my-search}", title)
        const response = await axios.get<IBook[]>(`${URL}`);
        const infoBooks = handleResponse<any>(response);
        return infoBooks.items ? infoBooks.items : infoBooks.docs
    } catch (error) {
        handleError(error);
        return []
    }
};

export {
    getBookByTitle
}
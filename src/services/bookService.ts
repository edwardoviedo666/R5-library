import axios, {AxiosResponse} from "axios";
import {IBook} from "../models/Book";
import {mapApiToBook, mapApiToBooks} from "../utils/mappers";

const API_URL = `/books`;

const handleResponse = <T>(response: AxiosResponse<T>): T => {
    return response.data;
};


const handleError = (error: any): never => {
    console.error("API call error: ", error)
    throw error
}

const getBookByTitle = async (title: string = "javascript", url: string): Promise<IBook[]> => {
    try {
        const URL = url.replace("my-search", title)
        const response = await axios.get<IBook[]>(`${URL}`);
        const infoBooks = handleResponse<IBook[]>(response);
        return mapApiToBooks(infoBooks)
    } catch (error) {
        handleError(error);
        return []
    }
};

export {
    getBookByTitle
}
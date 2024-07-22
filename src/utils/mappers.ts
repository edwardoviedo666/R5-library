import {IBook} from "../models/Book";
import {BookType} from "../components/Book";

interface Response {
    data?: {
        items: BookType[]
    }
}

export const mapApiToBook = (apiBook: BookType): IBook => {
    return {
        id: apiBook.id,
        title: apiBook.volumeInfo.title,
        author: apiBook.volumeInfo.title,
        description: "",
        image: apiBook.volumeInfo.imageLinks.thumbnail
    }
}

export const mapApiToBooks = (apiBooks: any[]): IBook[] => {
    return apiBooks?.map((book) => mapApiToBook(book));
};
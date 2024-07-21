import {IBook} from "../models/Book";

export const mapApiToBook = (apiBook: any): IBook => {
    return {
        id: apiBook.id,
        title: apiBook.title,
        author: apiBook.author,
        description: "",
        image: ""
    }
}

export const mapApiToBooks = (apiBooks: any[]): IBook[] => {
    return apiBooks.map(mapApiToBook);
};
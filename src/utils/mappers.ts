import {BookGoogleType, BookOpenType, IBook} from "../models/Book";
import {uuidV4} from "./uuidv4";
import {DEFAULT_IMAGE} from "./constants";


export const mapGoogleApiToBook = (apiBook: BookGoogleType): IBook => {
    return {
        id: apiBook.id,
        title: apiBook.volumeInfo.title,
        author: apiBook.volumeInfo.title,
        description: "",
        image: apiBook.volumeInfo.imageLinks.thumbnail
    }
}

export const mapApiToBooks = (apiBooks: any[]): IBook[] => {
    return apiBooks?.map((book) => mapGoogleApiToBook(book));
};

export const mapOpenApiToBook = (apiBook: BookOpenType): any => {

    return {
        id: apiBook?.cover_i,
        author: apiBook?.author_name,
        description: apiBook?.first_sentence,
        title: apiBook?.title,
        image: apiBook?.cover_i ? `https://covers.openlibrary.org/b/id/${apiBook?.cover_i}-L.jpg` : DEFAULT_IMAGE
    }
}

export const mapApiToOpenBooks = (apiBooks: any[]): IBook[] => {
    return apiBooks?.map((book) => mapOpenApiToBook(book));
};
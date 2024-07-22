import {useState, useEffect} from 'react';
import {IBook} from "../../models/Book";
import {getBookByTitle} from "../../services/bookService";
import {API_BASE_URL_GOOGLE} from "../../utils/constants";
import {mapApiToBooks} from "../../utils/mappers";


export const useBooksByTitle = (title: string) => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            if (!title) return
            try {
                setBooks([])
                setLoading(true);
                const booksData = await getBookByTitle(API_BASE_URL_GOOGLE, title);
                setBooks(mapApiToBooks(booksData));
            } catch (err) {
                setError('Failed to fetch books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks().then(r => r);
    }, [title]);

    return {books, loading, error};
};
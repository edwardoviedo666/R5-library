import {useState, useEffect} from 'react';
import {IBook} from "../models/Book";
import {getBookByTitle} from "../services/bookService";


export const useBooksByTitle = (url: string, title: string) => {
    const [books, setBooks] = useState<IBook[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getBookByTitle(url, title);
                setBooks(prevBooks => [...prevBooks, ...booksData]);
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
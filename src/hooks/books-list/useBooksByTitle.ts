import {useState, useEffect} from 'react';
import {IBook} from "../../models/Book";
import {getBookByTitle} from "../../services/bookService";
import {API_BASE_URL_GOOGLE, API_BASE_URL_OPEN_API} from "../../utils/constants";
import {mapApiToBooks} from "../../utils/mappers";



export const useBooksByTitle = (title: string) => {
    const [listBooks, setListBooks] = useState<IBook[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            if (!title) return
            try {
                setListBooks([])
                setLoading(true);
                const booksData = await getBookByTitle(API_BASE_URL_GOOGLE, title);
                setListBooks(mapApiToBooks(booksData));
            } catch (err) {
                setError('Failed to fetch books.');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks().then(r => r);
    }, [title]);

    return {listBooks, loading, error};
};
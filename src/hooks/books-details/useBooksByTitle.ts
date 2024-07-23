import {useState, useEffect} from 'react';
import {IBook} from "../../models/Book";
import {API_BASE_URL_GOOGLE, API_BASE_URL_OPEN_API} from "../../utils/constants";
import {mapApiToBooks, mapApiToOpenBooks} from "../../utils/mappers";
import {getBookByTitle} from "../../services/bookService";
import {useDispatch, useSelector} from "react-redux";


export const useOpenBooksByTitle = (title: string) => {
    const [listBooks, setListBooks] = useState<IBook[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            if (!title) return
            try {
                setListBooks([])
                setLoading(true);
                const booksData = await getBookByTitle(API_BASE_URL_OPEN_API, title);
                setListBooks(mapApiToOpenBooks(booksData));
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
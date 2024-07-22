interface IBook {
    id: string | number
    title: string
    author: string
    description: string
    image: string
    isFavorite?: boolean
}

class Book implements IBook {
    id: string | number
    title: string
    author: string
    description: string
    image: string
    isFavorite: boolean

    constructor(id: number, title: string, author: string, description: string, image: string, isFavorite: boolean = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.image = image
        this.isFavorite = isFavorite;
    }

    toggleFavorite(): void {
        this.isFavorite = !this.isFavorite;
    }
}

type BookType = {
    id: string
    volumeInfo: {
        title: string
        imageLinks: {
            thumbnail: string
        }
    }
}

interface Response {
    items: IBook[]
}

export default Book;
export type {IBook, BookType, Response};
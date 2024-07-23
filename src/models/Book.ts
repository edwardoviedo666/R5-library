interface IBook {
    id: string | number
    title: string
    author: string
    description: string
    image: string
    isFavorite?: boolean,
    comment?: string
}

export class Book implements IBook {
    id: string | number
    title: string
    author: string
    description: string
    image: string
    isFavorite: boolean
    comment?: string

    constructor(id: number, title: string, author: string, description: string, image: string, isFavorite: boolean = false, comment: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.image = image
        this.isFavorite = isFavorite;
        this.comment = comment
    }

    toggleFavorite(): void {
        this.isFavorite = !this.isFavorite;
    }
}

type BookGoogleType = {
    id: string
    volumeInfo: {
        title: string
        imageLinks: {
            thumbnail: string
        }
    }
}


type BookOpenType = {
    title: string,
    author_name: string[],
    cover_i: number,
    first_sentence: string[],

}

interface Response {
    items: IBook[]
}

export default Book;
export type {IBook, BookGoogleType, BookOpenType, Response};
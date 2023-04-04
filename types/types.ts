export interface Post {
    archived: boolean
    comments: Comment[]
    content: string
    createAt: Date
    id?: string
}

export interface Comment {
    createAt: Date
    content: string
}

export interface Contact {
    email: string
    name: string
    photo: string
    username: string
    id?: string
    coverPhoto?: string
}

export interface userLog {
    name: string,
    username: string,
    email: string,
    photo: string,
    contacts: Contact[],
    post:Post[],
    id: true
}

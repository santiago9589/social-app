export interface Post {
    creatorId: string
    archived: boolean
    comments: Comment[]
    content: string
    createAt: Date
}

export interface Comment {
    createAt: Date
    content: string
}
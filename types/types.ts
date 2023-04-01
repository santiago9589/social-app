export interface Post {
    archived: boolean
    comments: Comment[]
    content: string
    createAt: Date
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
  }
  
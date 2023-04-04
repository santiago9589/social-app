import { NextApiRequest } from "next"
import { getSession } from "next-auth/react"
import { prisma } from "../prismadb/prismadb"

const serverAuth = async (req: NextApiRequest) => {

    const session = await getSession({ req })

    if (!session?.user?.email) {
        throw new Error("credenciales invalidas")
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        },
        select: {
            name: true,
            username: true,
            email: true,
            photo: true,    
            contacts: {
                select: {
                    id:true,
                    email: true,
                    name: true,
                    photo: true,
                    username: true,
                    coverPhoto:true
                }
            },
            post: {
                select: {
                    archived:true,
                    content:true,
                    createAt:true,
                    comments:true
                }
            },
            id: true
        }
    })

    if (!user) {
        throw new Error("credenciales invalidas")
    }

    return { user }
}

export default serverAuth
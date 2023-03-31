import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(504).send("metodo equivocado")
    }

    const idPost: any = req.query
    const { content } = req.body

    if (!idPost || !content) {
        return res.status(404).send("datos invalidos")
    }

    const postExist = await prisma.post.findUnique({
        where: {
            id: idPost
        }
    })

    if (!postExist?.content) {
        return res.status(404).send("post inexistente")
    }

    try {

        const response = prisma.comment.create({
            data: {
                postId: postExist.id,
                createAt: new Date(),
                content
            }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}




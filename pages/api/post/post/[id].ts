import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query.id
    const {content,role } = req.body

    if (!id || !content ) {
        return res.status(404).send("datos invalidos")
    }

    const userExist = await prisma.user.findUnique({
        where: {
            id:id
        }
    })

    if (!userExist?.email) {
        return res.status(404).send("usuario no existe")
    }

    try {

        const response = await prisma.post.create({
            data: {
                archived:false,
                content,
                userId:userExist.id,
                createAt:new Date(),
                role
            }
        })


        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}

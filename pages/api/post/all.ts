import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(504).send("metodo equivocado")
    }

    try {

        const response = await prisma.post.findMany({
            select: {
                comments: true,
                content: true,
                archived: true,
                createAt: true,
                id:true
            }
        })


        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}
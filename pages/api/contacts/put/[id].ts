import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "PUT") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query.id
    const { name, username, email, password, photo } = req.body

    if (!id || !name || !username || !email || !password || !photo) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.contact.update({
           where:{
                id
           },
           data: {
            name,
            username,
            email,
            photo,
        }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}
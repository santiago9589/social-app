import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "DELETE") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query

    if (!id) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.user.delete({
            where: {
                id
            }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}

export const handlerPut = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PUT") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query
    const { name, username, email, password, photo } = req.body

    if (!id || !name || !username || !email || !password || !photo) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.user.update({
           where:{
                id
           },
           data: {
            name,
            username,
            email,
            password,
            photo,
            createAt: new Date()
        }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}




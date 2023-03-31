import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(504).send("metodo equivocado")
    }

    const idUser:any = req.query
    const { name, username, email,  photo } = req.body

    if (!idUser || !name || !username || !email  || !photo) {
        return res.status(404).send("datos invalidos")
    }

    const contactExist = await prisma.contact.findUnique({
        where: {
            email
        }
    })

    if (contactExist?.email) {
        return res.status(404).send("contacto existente")
    }

    const userExist = await prisma.user.findUnique({
        where: {
            id:idUser
        }
    })

    if (!userExist?.email) {
        return res.status(404).send("usuario no existe")
    }

    try {

        const response = prisma.contact.create({
            data: {
                name,
                username,
                email,
                photo,
                userId:userExist.id
            }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}
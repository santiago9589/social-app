import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prismadb/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(504).send("sin respuesta")
    }
    const { name, username, email, password, photo } = req.body

    if (!name || !username || !email || !password || !photo) {
        return res.status(404).send("campos invalidos")
    }

    const userExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (userExist?.email) {
        return res.status(404).send("email no disponible")
    }

    try {
        const response = await prisma.user.create({
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
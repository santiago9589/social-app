import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prismadb/prismadb"



export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "PUT") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query.id
    const { photo } = req.body

    if (!id || !photo) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.user.update({
           where:{
                id
           },
           data: {
            photo,
        }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}




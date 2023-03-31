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






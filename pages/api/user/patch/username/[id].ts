import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prismadb/prismadb"



export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "PATCH") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query.id
    const { username } = req.body

    console.log(username)

    if (!username) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.user.update({
           where:{
                id
           },
           data: {
            username,
        }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

   

}




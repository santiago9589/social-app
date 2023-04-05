import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prismadb/prismadb"


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "PUT") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query.id
    const { idUser,content} = req.body

    if (!id || !idUser || content) {
        return res.status(404).send("datos invalidos")
    }

    const userExist = await prisma.user.findUnique({
        where:{
             id:idUser
        }
     })

     const postExist = await prisma.post.findUnique({
        where:{
             id
        }
     })

     if(userExist?.id !== postExist?.userId){
        return res.status(404).send("sin autorizacion")
     }

    try {

        const response = await prisma.post.update({
           where:{
                id
           },
           data: {
            content
        }
        })

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}

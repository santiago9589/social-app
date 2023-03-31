import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb/prismadb"


export const handlerPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(504).send("metodo equivocado")
    }

    const idUser:any = req.query
    const {content } = req.body

    if (!idUser || !content ) {
        return res.status(404).send("datos invalidos")
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

        const response = prisma.post.create({
            data: {
                archived:false,
                content,
                userId:userExist.id,
                createAt:new Date()
            }
        })


        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}

export const handlerDelete = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query
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

        const response = await prisma.post.delete({
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


export const handlerGet = async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(504).send("metodo equivocado")
    }

    const id:any = req.query

    if (!id) {
        return res.status(404).send("datos invalidos")
    }

    try {

        const response = await prisma.post.findUnique({
           where:{
                id
           }
        })
    

        return res.status(200).send(response)

    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}
import serverAuth from "@/lib/serverAuth/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(504).send("sin respuesta")
    }
    try {
        const response = await serverAuth(req)
        return res.status(200).send(response)
    } catch (error: any) {
        return res.status(404).send(error.message)
    }

}
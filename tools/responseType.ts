import { NextApiRequest } from "next"


export const succesResponse = (req: NextApiRequest, content: any) => {
    return new Response(JSON.stringify(content))
}

export const failResponse = (req: NextApiRequest, error: string) => {
    return new Response(JSON.stringify(error))
}


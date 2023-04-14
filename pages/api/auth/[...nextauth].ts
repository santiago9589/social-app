import CredentialProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import bcrypt from "bcrypt"
import { prisma } from "../../../lib/prismadb/prismadb"
import NextAuth from "next-auth"


export default NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        CredentialProvider({
            name:"credentials",
            credentials:{
                email:{label:"email",type:"text"},
                password:{label:"password",type:"text"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error("credenciales invalidas")
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                })

                if(!user?.email){
                    throw new Error("credenciales no existen")
                }

                const verifyPassword = bcrypt.compare(credentials.password,user.password)

                if(!verifyPassword){
                    throw new Error("credenciales invalidas")
                }

                return user

            }
        })
    ],
    debug:process.env.NODE_ENV !== "production",
    session:{
        strategy:"jwt"
    },
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET
    },
    secret:process.env.NEXTAUTH_SECRET
})



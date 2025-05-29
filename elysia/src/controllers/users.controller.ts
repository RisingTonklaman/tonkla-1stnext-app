import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient();

export const getUsers = async ({ status } : any) => {
    try {
        const users = await prisma.user.findMany();

        return status(200, {
            data : users
        })
    } catch (error) {
        console.log(error)
        return status(500,{error : "Hello Error"})
        
    }
}

export const getUser = async ({ params : { id }, status}: any) => {
    try {
        const users = await prisma.user.findMany();

        return status(400,"Hello Wasuchok" + id)
    } catch (error) {
        console.log(error)
        return status(500,{error : "Hello Error"})
        
    }
}


export const createUser = async (ctx : any) => {
    const { username, password } = ctx.body
    try {
        return {
            body : {
                username,
                password
            }
        }
    } catch (error) {
        console.log(error)
    }
}
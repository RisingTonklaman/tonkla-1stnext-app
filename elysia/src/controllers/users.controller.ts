export const getUser = async ({ params : { id }, status}: any) => {
    try {
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
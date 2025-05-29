import { Elysia } from 'elysia'
import { createUser, getUser } from '../controllers/users.controller'

const subRouter = new Elysia({ prefix: '/api' })
	.get('/user/:id', getUser)
    .post('/user', createUser)

export const userRoute = new Elysia()
	.use(subRouter)

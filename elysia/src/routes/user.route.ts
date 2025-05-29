import { Elysia } from 'elysia'
import { createUser, getUser, getUsers } from '../controllers/users.controller'

const subRouter = new Elysia({ prefix: '/api/v1/user' })
    .get('/', getUsers)
	.get('/user/:id', getUser)
    .post('/user', createUser)

export const userRoute = new Elysia()
	.use(subRouter)

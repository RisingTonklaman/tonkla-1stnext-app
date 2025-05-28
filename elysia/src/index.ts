import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'
import { userRoute } from './routes/user.route'

const app = new Elysia({ adapter: node() })
	.use(userRoute)
	.listen(3003, ({ hostname, port }) => {
		console.log(
			`🦊 Elysia is running at ${hostname}:${port}`
		)
	})
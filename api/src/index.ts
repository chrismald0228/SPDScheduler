import { Elysia } from 'elysia'
import { user } from './modules/user/user'

const app = new Elysia({prefix: "/api"})
    .use(user)
    .listen(3000)

console.log(`Server running at http://localhost:${app.server?.port}`)
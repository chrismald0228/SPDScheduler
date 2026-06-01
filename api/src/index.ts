import { Elysia } from 'elysia'
import { user } from './modules/user/user'
import { reservation } from './modules/reservation/reservation'

export const app = new Elysia({prefix: "/api"})
    .use(user)
    .use(reservation)


if(Bun.env.NODE_ENV !== "test") {
    app.listen(3000)
    console.log(`Server running at http://localhost:${app.server?.port}/api`)
}

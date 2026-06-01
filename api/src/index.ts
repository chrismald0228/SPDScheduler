import { Elysia } from 'elysia'
import { user } from './modules/user/user'
import { reservation } from './modules/reservation/reservation'
import { errors} from './lib/errors'

export const app = new Elysia({prefix: "/api"})
    .error(errors)
    .use(user)
    .use(reservation)

//does not listen if running test, since bun runs them internally
if(Bun.env.NODE_ENV !== "test") {
    app.listen(3000)
    console.log(`Server running at http://localhost:${app.server?.port}/api`)
}

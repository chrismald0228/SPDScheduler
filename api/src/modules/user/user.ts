import { Elysia, ElysiaCustomStatusResponse, t } from 'elysia'
import { UserModel, UserResponses } from './model'
import { UserService } from './service'

export const user = new Elysia({prefix: "/users"})
    .get("/", () => UserService.getAll(), {
        response: UserResponses
    })
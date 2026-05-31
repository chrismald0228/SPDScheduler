import { Elysia, ElysiaCustomStatusResponse, t } from 'elysia'
import { UserModel, UserResponses } from './model'
import { UserService } from './service'

export const user = new Elysia({prefix: "/users"})
    .get("/", () => UserService.getAll(), {
        response: UserResponses
    })
    .get("/:id", ({ params: { id } }) => UserService.getById(id), {
        params: t.Object({ id: t.Numeric() }),
        response: UserModel.response
    })
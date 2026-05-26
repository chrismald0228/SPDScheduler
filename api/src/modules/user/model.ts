import { password } from "bun"
import { t } from "elysia"

export const UserModel = {
    create: t.Object({
        username: t.String(),
        password: t.String(),
        name: t.String(),
        phoneNum: t.String(),
        isAdmin: t.Optional(t.Boolean())
    }),
    update: t.Object({
        username: t.Optional(t.String()),
        password: t.Optional(t.String()),
        name: t.Optional(t.String()),
        phoneNum: t.Optional(t.String()),
        isAdmin: t.Optional(t.Boolean())
  }),
    response: t.Object({
        username: t.String(),
        name: t.String(),
        phoneNum: t.String(),
        isAdmin: t.Boolean()
    })
}

export const UserResponses = t.Array(UserModel.response)
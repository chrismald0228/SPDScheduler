import { t } from 'elysia'

export const ReservationModel = {
    create: t.Object({
        firstName: t.String(),
        lastName: t.String(),
        phoneNum: t.String({ minLength: 10, maxLength:10 }),
        field: t.Integer(),
        rate: t.Integer(),
        startTime: t.Date(),
        endTime: t.Date()
    }),
    response: t.Object({
        firstName: t.String(),
        lastName: t.String(),
        phoneNum: t.String(),
        field: t.Integer(),
        rate: t.Integer(),
        startTime: t.Date(),
        endTime: t.Date(),
        createdById: t.Integer()
    })
}

export const ReservationResponses = t.Array(ReservationModel.response)
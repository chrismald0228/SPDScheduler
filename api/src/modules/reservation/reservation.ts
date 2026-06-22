import { Elysia, t } from 'elysia'
import { ReservationModel, ReservationResponses } from './model'
import { ReservationService } from './service'

export const reservation = new Elysia({prefix: "/reservations"})
    .get("/", () => ReservationService.getAll(), {
        response: ReservationResponses
    })
    .post('/', ({ body }) => ReservationService.create(body), {
        body: ReservationModel.create
    })
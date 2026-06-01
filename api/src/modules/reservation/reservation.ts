import { Elysia, t } from 'elysia'
import { ReservationModel, ReservationResponses } from './model'
import { ReservationService } from './service'

export const reservation = new Elysia({prefix: "/reservations"})
    .get("/", () => ReservationService.getAll(), {
        response: ReservationResponses
    })
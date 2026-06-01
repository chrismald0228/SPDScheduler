import { prisma } from '@/lib/db'
import { ReservationModel } from './model'

export abstract class ReservationService {
    static getAll() {
        return prisma.reservation.findMany()
    }
}
import { prisma } from '@/lib/db'
import { ReservationModel } from './model'
import { ConflictError } from '@/lib/errors'

export abstract class ReservationService {
    static getAll() {
        return prisma.reservation.findMany()
    }
    // .static pulls the actual type. without static, the runtime uses ResModel for validation
    static async create(data: typeof ReservationModel.create.static) {
        const existing = await prisma.reservation.findFirst({
            where: {
                field: data.field,
                startTime: {lte: data.endTime},
                endTime: {gte: data.startTime}
            }
        })

        if(existing) throw new ConflictError("Field already reserved for this time.")

        return prisma.reservation.create({ data })
    } 
}
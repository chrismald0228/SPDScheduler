import { prisma } from '@/lib/db'
import { NotFoundError } from '@/lib/errors'
import { UserModel } from './model'

export abstract class UserService { 
    static getAll() {
        return prisma.user.findMany({
            omit: {password: true}
        })
    }
    static async getById(id: number){
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if(!user) throw new NotFoundError("User not Found")

        return user
    }
}
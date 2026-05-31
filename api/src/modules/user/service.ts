import { prisma } from '../../lib/db'
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

        if(!user) throw new Error("User not Found")

        return user
    }
}
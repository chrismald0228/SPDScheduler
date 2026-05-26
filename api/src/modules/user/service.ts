import { prisma } from '../../lib/db'
import { UserModel } from './model'

export abstract class UserService { 
    static getAll() {
        return prisma.user.findMany({
            omit: {password: true}
        })
    }
}
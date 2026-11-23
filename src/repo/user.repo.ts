import { prisma } from "../config/prisma";
import type { User } from "../generated/prisma/client";

class UserRepo {
    static async create(name: string, email: string, password: string, gender?: boolean): Promise< User > {
        return await prisma.user.create({
            data: {
                name,
                email,
                password,
                ...(gender !== undefined && { gender })
            }
        })
    }

    static async readonly(id: string): Promise< User | null > {
        return await prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    static async read(): Promise< User[] | null > {
        return await prisma.user.findMany();
    }

    static async readByMail(email: string): Promise< User | null > {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }
}

export default UserRepo;
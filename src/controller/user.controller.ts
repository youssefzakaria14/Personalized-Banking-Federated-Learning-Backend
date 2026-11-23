import type { Request, Response } from "express";
import UserRepo from "../repo/user.repo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConfig from "../config/env";

class UserController {
    static async register(req: Request, res: Response) {
        try {
            const { name, email, password, gender } = req.body;
            const hashedPass = await bcrypt.hash(password, 12);
            const data = await UserRepo.create(name, email, hashedPass, gender);
            return res.status(201).json({ message: "User Created Successfully", success: true })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" })
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await UserRepo.readByMail(email);
            if (!user) {
                return res.status(401).json({ message: "unauthorized" })
            }
            const hashedPass = await bcrypt.compare(password, user.password);
            if (!hashedPass) {
                return res.status(401).json({ message: "unauthorized" })
            }
            
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                name: user.name,
                gender: user.gender
            }, envConfig.secret, {expiresIn: "1h"})
            return res.status(200).json({message: "Login successfully", token})
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" })
        }
    }
}

export default UserController;
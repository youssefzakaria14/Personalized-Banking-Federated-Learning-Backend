import { Router } from "express";
import UserController from "../controller/user.controller";

const UserRouter : Router = Router();

UserRouter
    .post("/register", UserController.register)
    .post("/login", UserController.login)

export default UserRouter;
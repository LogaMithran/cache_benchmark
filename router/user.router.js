import express from "express";
import UserController from "../controllers/user.controller.js";

const UserRouter = express.Router();
const userController = new UserController()

UserRouter.get("/:userid", async (req, res, next) => {
    return userController.getUser(req, res, next)
})

export default UserRouter
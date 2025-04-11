import UserService from "../service/user.service.js";

class UserController {
    constructor() {
        this.userservice = new UserService()
    }

    async getUser(req, res, next) {
        const userId = req.params.userid

        const userDetails = await this.userservice.getUserById(userId)
        if (userDetails) {
            return res.status(200).json(userDetails)
        }
        res.status(400).send("User not found")
    }
}


export default UserController
import CacheService from "./cache/cache.service.js";
import db from "../connectors/rds.connector.js"

class UserService {
    constructor() {
        this.cacheService = new CacheService()
        this.cacheService.ping()
    }

    async getUserById(userId) {
        const cacheResult = await this.getUserFromCache(userId)
        if (cacheResult) {
            return JSON.parse(cacheResult)
        }
        const [rows] = await db.query('SELECT * FROM users where id = ?', userId);
        await this.setUserCache(userId, rows)
        return rows
    }

    async getUserFromCache(userId) {
        return this.cacheService.get("USER" + userId)
    }

    async setUserCache(userId, userDetails) {
        const cacheResponse = await this.cacheService.set("USER" + userId, JSON.stringify(userDetails))
        console.log(cacheResponse)
    }
}

export default UserService
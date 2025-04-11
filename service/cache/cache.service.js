import Redis from "ioredis"

class CacheService {

    constructor() {
        this.client = new Redis(process.env.REDIS_PORT, process.env.REDIS_HOST);
    }

    async ping() {
        const result = await this.client.ping()
        console.log(result)
    }

    async get(key) {
        return this.client.get(key)
    }

    async set(key, value) {
        return this.client.set(key, value)
    }
}


export default CacheService
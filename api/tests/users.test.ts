import { describe, it, expect } from "bun:test"
import { app } from '@/index'

describe("Users", () => {
    it("should return all users", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/"))
        
        expect(response.status).toBe(200)
        const data = await response.json()
        expect(data).toBeArray()
    })
})
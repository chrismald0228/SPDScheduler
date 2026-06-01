import { describe, it, expect } from "bun:test"
import { app } from '@/index'

describe("Reservations", () => {
    it("should return all reservations", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/reservations/"))
        
        const data = await response.json()
        console.log(data)

        expect(response.status).toBe(200)
        expect(data).toBeArray()
    })
})
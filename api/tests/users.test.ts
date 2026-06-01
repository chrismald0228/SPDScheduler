import { describe, it, expect } from "bun:test"
import { UserModel } from "@/modules/user/model"
import { type UnwrapBodySchema } from "elysia"
import { app } from '@/index'

describe("GET /users", () => {
    it("should return 200", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/"))
        
        expect(response.status).toBe(200)
    })
    it("should return array", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/"))
        
        const data = await response.json()
        expect(data).toBeArray()
    })
})

describe("GET /users/:id", () => {
    it("should return 200", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/7"))

        expect(response.status).toBe(200)
    })
    it("should return 404", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/999999"))

        expect(response.status).toBe(404)
    })
    it("should return correct user", async () => {
        const response = await app
            .handle(new Request("http://localhost/api/users/7"))
        
        type UserResponse = typeof UserModel.response.static

        const data = await response.json() as UserResponse
        expect(data).toBeObject()
        expect(data.username).toBe("jsmith")
    })
    
})
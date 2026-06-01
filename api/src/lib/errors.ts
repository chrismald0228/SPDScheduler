import { InternalServerError, NotFoundError } from 'elysia'

export { NotFoundError, InternalServerError} from 'elysia'
export class UnauthorizedError extends Error {
    status = 401
    constructor(public override message: string) {
        super(message)
    }
}
export class BadRequestError extends Error {
    status = 400
    constructor(public override message: string) {
        super(message)
    }
}
export class ForbiddenError extends Error {
    status = 403
    constructor(public override message: string) {
        super(message)
    }
}
export class ConflictError extends Error {
    status = 409
    constructor(public override message: string) {
        super(message)
    }
}

export const errors = {
    NotFoundError,
    InternalServerError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError,
    ConflictError
}
export interface AuthUser {
    email: string
    username: string
    roles: string[]
}

declare module 'express-serve-static-core' {
    interface Request{
        user: AuthUser
    }
}
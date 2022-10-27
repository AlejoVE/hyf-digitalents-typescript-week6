import { Request } from "express"


export type Payload = {
    uid: string,
    role: string
}

export type CustomRequest = Request & Payload
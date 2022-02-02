export interface DocumentPayload {
    Assigner?: string
    DocName?: string
    Owner?: string
    Status?: string
    _id: string
}

export interface DocumentPayloads {
    payload: DocumentPayload[]
}

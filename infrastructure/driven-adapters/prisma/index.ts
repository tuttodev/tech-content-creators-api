import { PrismaClient } from "@prisma/client"

export class PrismaDBClient {
  private static _INSTANCE: PrismaClient

  static getInstance(): PrismaClient {
    if (this._INSTANCE === undefined) {
      this._INSTANCE = new PrismaClient()
    }

    return this._INSTANCE
  }
}


import express from 'express'
import v1Routes from './routes/v1/index'

export class Server {
  private readonly _app: express.Express
  private readonly _port: number = 3000

  constructor () {
    this._app = express()
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))

    // Set up routes
    this._setupRoutes()
  }

  private _setupRoutes (): void {
    this._app.use('/v1', v1Routes)
  }

  async start (): Promise<Server> {
    return await new Promise((resolve, reject) => {
      this._app.listen(this._port, () => {
        console.log(`Server started on port ${this._port}`)
        resolve(this)
      }).on('error', (err) => {
        console.error('Failed to start server:', err)
        reject(err)
      })
    })
  }
}

import { Server } from './server'

const server = new Server()
server.start()
  .then(() => {
    console.log('Server started')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
  })

import { Server } from './server'
import serverless from 'serverless-http'
import { type APIGatewayEvent, type Context } from 'aws-lambda'

exports.handler = async (event: APIGatewayEvent, context: Context): Promise<any> => {
  const server = new Server()
  const handler = serverless(server.getExpressApp())

  return await handler(event, context)
}

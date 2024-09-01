import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Health check v1', timestamp: new Date().getTime() })
})

export default router

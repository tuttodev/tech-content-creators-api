import { Router } from 'express'
import healthRouter from './health'
import contentCreatorRouter from './content-creator'

const router = Router()

router.use('/health', healthRouter)
router.use('/content-creator', contentCreatorRouter)

export default router

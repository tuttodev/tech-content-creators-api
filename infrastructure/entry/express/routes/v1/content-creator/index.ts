import { Request, Response } from 'express'
import Router from 'express-promise-router'
import { ContentCreatorGetter } from '../../../../../../application/usecases/ContentCreatorGetter'
import { JSONFileContentCreatorRepository } from '../../../../../persistence/json/JSONFileContentCreatorRepository'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const repository = new JSONFileContentCreatorRepository()
  const usecase = new ContentCreatorGetter(repository)

  const contentCreators = await usecase.execute()

  res.json(contentCreators)
})

export default router

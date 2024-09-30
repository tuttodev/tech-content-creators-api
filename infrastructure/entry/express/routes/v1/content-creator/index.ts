import { Request, Response } from 'express'
import Router from 'express-promise-router'
import { ContentCreatorGetter } from '../../../../../../application/usecases/ContentCreatorGetter'
import { MongoContentCreatorRepository } from '../../../../../persistence/mongodb/MongoContentCreatorRepository'
import { ContentCreatorSave } from '../../../../../../application/usecases/ContentCreatorSave'
import { contentCreatorSchema } from '../../../utils/contentCreatorSchema'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  const repository = new MongoContentCreatorRepository()
  const usecase = new ContentCreatorGetter(repository)

  const contentCreators = await usecase.execute()

  res.json(contentCreators)
})

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const repository = new MongoContentCreatorRepository()
  const usecase = new ContentCreatorSave(repository)

  const contentCreatorPayloadValidated = contentCreatorSchema.safeParse(req.body)
  if (contentCreatorPayloadValidated.success) {
    const newContentCreator = await usecase.execute(contentCreatorPayloadValidated.data)
    res.status(200).json(newContentCreator)
  } else {
    res.status(400).json(contentCreatorPayloadValidated.error)
  }
})

export default router

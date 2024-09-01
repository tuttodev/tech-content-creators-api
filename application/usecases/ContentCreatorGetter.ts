import { ContentCreator } from '../../domain/entities/content-creator'
import { ContentCreatorRepository } from '../../domain/repositories/ContentCreatorRepository'

export class ContentCreatorGetter {
  constructor (
    private readonly contentCreatorRepository: ContentCreatorRepository
  ) {}

  async execute (): Promise<ContentCreator[]> {
    return await this.contentCreatorRepository.getAll()
  }
}

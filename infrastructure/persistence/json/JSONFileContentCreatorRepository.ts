import { ContentCreator } from '../../../domain/entities/content-creator'
import { ContentCreatorRepository } from '../../../domain/repositories/ContentCreatorRepository'
import contentCreators from './content-creators.json'

export class JSONFileContentCreatorRepository implements ContentCreatorRepository {
  async getAll (): Promise<ContentCreator[]> {
    return contentCreators.map(item => new ContentCreator(
      item.id,
      item.name,
      item.language,
      item.logoUrl,
      {
        ig: item.socialnetworks?.ig ?? null,
        twitch: item.socialnetworks?.twitch ?? null,
        x: item.socialnetworks?.x ?? null,
        youtube: item.socialnetworks?.youtube ?? null,
        github: item.socialnetworks?.github ?? null
      }
    ))
  }
}

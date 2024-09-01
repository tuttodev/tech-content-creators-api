
import { ContentCreator } from '../entities/content-creator'

export interface ContentCreatorRepository {
  getAll: () => Promise<ContentCreator[]>
}

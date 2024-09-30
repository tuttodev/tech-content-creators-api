
import { ContentCreator } from '../entities/content-creator'

export interface ContentCreatorRepository {
  getAll: () => Promise<ContentCreator[]>
  save: (contentCreatorPayload: Omit<ContentCreator, 'id'>) => Promise<ContentCreator>
}

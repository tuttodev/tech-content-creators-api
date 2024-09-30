import { ContentCreator } from "../../domain/entities/content-creator";
import { ContentCreatorRepository } from "../../domain/repositories/ContentCreatorRepository";

export class ContentCreatorSave {
  constructor(
    private readonly contentCreatorRepository: ContentCreatorRepository
  ) {}

  async execute(
    contentCreatorPayload: Omit<ContentCreator, "id">
  ): Promise<ContentCreator> {
    return await this.contentCreatorRepository.save(contentCreatorPayload);
  }
}

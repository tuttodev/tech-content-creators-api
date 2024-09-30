import { ContentCreator } from "../../../domain/entities/content-creator";
import { ContentCreatorRepository } from "../../../domain/repositories/ContentCreatorRepository";
import { PrismaDBClient } from "../../driven-adapters/prisma";

export class MongoContentCreatorRepository implements ContentCreatorRepository {
  private _prismaClient = PrismaDBClient.getInstance();

  async getAll(): Promise<ContentCreator[]> {
    const contentCreators = await this._prismaClient.contentCreator.findMany();
    console.log("Esto viene desde el Cluster Mongo DB Atlas");
    console.log(contentCreators);
    return contentCreators.map((contentCreator) => {
      return {
        id: contentCreator.id,
        name: contentCreator.name,
        language: contentCreator.language,
        logoUrl: contentCreator.logoUrl,
        socialNetworks: {
          ig: contentCreator.socialNetworks.ig,
          youtube: contentCreator.socialNetworks.youtube,
          x: contentCreator.socialNetworks.x,
          twitch: contentCreator.socialNetworks.twitch,
          github: contentCreator.socialNetworks.github,
        },
      };
    });
  }

  async save(
    contentCreatorPayload: Omit<ContentCreator, "id">
  ): Promise<ContentCreator> {
    const savedContentCreator: ContentCreator =
      await this._prismaClient.contentCreator.create({
        data: {
          ...contentCreatorPayload,
          socialNetworks: {
            ig:
              contentCreatorPayload.socialNetworks.ig === null
                ? []
                : contentCreatorPayload.socialNetworks.ig,
            youtube:
              contentCreatorPayload.socialNetworks.youtube === null
                ? []
                : contentCreatorPayload.socialNetworks.youtube,
            x:
              contentCreatorPayload.socialNetworks.x === null
                ? []
                : contentCreatorPayload.socialNetworks.x,
            twitch:
              contentCreatorPayload.socialNetworks.twitch === null
                ? []
                : contentCreatorPayload.socialNetworks.twitch,
            github:
              contentCreatorPayload.socialNetworks.github === null
                ? []
                : contentCreatorPayload.socialNetworks.github,
          },
        },
      });

    return savedContentCreator;
  }
}

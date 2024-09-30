import { PrismaDBClient } from ".";
import { ContentCreator } from "../../../domain/entities/content-creator";

const prismaClient = PrismaDBClient.getInstance();

async function main() {
  const contentCreators: ContentCreator[] = [
    {
      name: "tuttodev",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/tuttodev.png",
      socialNetworks: {
        ig: ["tuttodev"],
        youtube: ["@tuttodev"],
        twitch: [],
        x: ["tuttodevv"],
        github: ["tuttodev"],
      },
    },
    {
      name: "midudev",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/midudev.png",
      socialNetworks: {
        ig: ["midu.dev"],
        youtube: ["@midudev", "@midulive"],
        twitch: ["midudev"],
        x: ["midudev"],
        github: ["midudev"],
      },
    },
    {
      name: "NetworkChuck",
      language: "english",
      logoUrl: "https://resources.creadoresapi.com/logos/networkchuck.png",
      socialNetworks: {
        ig: ["networkchuck"],
        youtube: ["@NetworkChuck"],
        twitch: ["networkchuck"],
        x: ["networkchuck"],
        github: [],
      },
    },
    {
      name: "Fazt",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/fazt.png",
      socialNetworks: {
        ig: ["fazttech"],
        youtube: ["@FaztCode", "@FaztTech"],
        x: ["FaztTech"],
        github: ["fazt", "faztcommunity", "FaztWeb"],
        twitch: [],
      },
    },
    {
      name: "Programador X",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/programador-x.png",
      socialNetworks: {
        ig: ["programador.x"],
        youtube: ["@ProgramadorX"],
        x: ["programador_x_"],
        github: [],
        twitch: [],
      },
    },
    {
      name: "MoureDev",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/mouredev.png",
      socialNetworks: {
        ig: ["mouredev"],
        youtube: ["@mouredevtv"],
        x: ["MoureDev"],
        twitch: ["mouredev"],
        github: ["mouredev"],
      },
    },
    {
      name: "Traversy Media",
      language: "english",
      logoUrl: "https://resources.creadoresapi.com/logos/traversy-media.png",
      socialNetworks: {
        ig: ["traversymedia"],
        youtube: ["@TraversyMedia"],
        x: ["traversymedia"],
        github: ["bradtraversy"],
        twitch: [],
      },
    },
    {
      name: "developedbyed",
      language: "english",
      logoUrl: "https://resources.creadoresapi.com/logos/developedbyed.png",
      socialNetworks: {
        ig: ["developedbyed"],
        youtube: ["@developedbyed"],
        x: ["developedbyed"],
        github: [],
        twitch: [],
      },
    },
    {
      name: "munoncode",
      language: "spanish",
      logoUrl: "https://resources.creadoresapi.com/logos/munoncode.png",
      socialNetworks: {
        ig: ["munoncode"],
        youtube: ["@munoncode"],
        github: [],
        twitch: [],
        x: [],
      },
    },
  ] as unknown as any;

  for (const creator of contentCreators) {
    await prismaClient.contentCreator.create({
      data: creator as any,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

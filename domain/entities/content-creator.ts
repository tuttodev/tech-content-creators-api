export class ContentCreator {
  constructor (
    readonly id: string,
    readonly name: string,
    readonly language: string,
    readonly logoUrl: string,
    readonly socialNetworks: {
        ig: string[] | null
        youtube: string[] | null
        x: string[] | null
        twitch: string[] | null
        github: string[] | null
    }
  ) {}
}

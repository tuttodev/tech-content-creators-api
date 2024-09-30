import { z } from "zod";

export const contentCreatorSchema = z.object({
  name: z.string(),
  language: z.string(),
  logoUrl: z.string(),
  socialNetworks: z.object({
    ig: z.array(z.string()).nullable(),
    youtube: z.array(z.string()).nullable(),
    x: z.array(z.string()).nullable(),
    twitch: z.array(z.string()).nullable(),
    github: z.array(z.string()).nullable(),
  }),
});

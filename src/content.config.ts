import { defineCollection, type ImageFunction } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const themeEnum = z.enum(["music", "video", "tech"]);

const baseSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string().optional(),
    theme: z.array(themeEnum).default([]),
    thumbnailUrl: image(),
    createdAt: z.string(),
  });

const tech = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/contents/tech" }),
  schema: ({ image }) =>
    baseSchema(image).extend({
      genre: z.string(),
      urls: z.object({
        appUrl: z.url().optional(),
        downloadUrl: z.url().optional(),
        sourceUrl: z.url().optional(),
      }),
    }),
});

const music = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/contents/music" }),
  schema: ({ image }) => baseSchema(image),
});

const video = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/contents/video" }),
  schema: ({ image }) =>
    baseSchema(image)
      .extend({
        videoUrl: z.url().optional(),
        seriesUrl: z.url().optional(),
      })
      .refine(
        (data) =>
          (data.videoUrl !== undefined) !== (data.seriesUrl !== undefined),
        { message: "videoUrl と seriesUrl は排他です" },
      ),
});

const other = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/contents/other" }),
  schema: ({ image }) => baseSchema(image),
});

export const collections = { tech, music, video, other };

import { promises as fs } from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

// O caminho agora aponta para a pasta 'data'
const pathData = path.join(__dirname, "..", "data", "podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const rawData = await fs.readFile(pathData, "utf-8");
  let jsonFile: PodcastModel[] = JSON.parse(rawData);

  if (podcastName) {
    // Filtra os podcasts pelo nome, ignorando maiúsculas/minúsculas
    return jsonFile.filter(
      (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
    );
  }

  return jsonFile;
};
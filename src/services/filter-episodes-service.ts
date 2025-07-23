import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string
): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast(podcastName);

  const responseFormat: PodcastTransferModel = {
    statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
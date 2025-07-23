import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const getPodcasts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  // Lógica para determinar se é uma busca geral ou um filtro
  const podcastName = new URL(
    req.url!,
    `http://${req.headers.host}`
  ).searchParams.get("name");

  let content: PodcastTransferModel;

  if (podcastName) {
    content = await serviceFilterEpisodes(podcastName);
  } else {
    content = await serviceListEpisodes();
  }

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  // Simplificado para usar res.end() diretamente
  res.end(JSON.stringify(content.body));
};
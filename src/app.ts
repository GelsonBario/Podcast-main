import * as http from "http";
import { getPodcasts } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { StatusCode } from "./utils/status-code";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];
  const method = request.method;

  // Roteamento simplificado
  if (method === HttpMethod.GET && baseUrl === Routes.PODCASTS) {
    await getPodcasts(request, response);
  } else {
    response.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Rota não encontrada" }));
  }
};
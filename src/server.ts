import * as http from "http";
import { app } from "./app";

const port = process.env.PORT || 3000; // Adicionado um fallback

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
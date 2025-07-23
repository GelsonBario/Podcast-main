Podcast Manager

Descrição
Um aplicativo estilo Netflix, com o objetivo de centralizar episódios de podcasts em vídeo, organizando-os em seções por categorias. 
Domínio

O foco do projeto são podcasts disponibilizados em formato de vídeo. 
Funcionalidades

Listar todos os episódios de podcast disponíveis.

Organizar os episódios em seções baseadas em suas categorias (ex: Saúde, Humor, Esportes). 

Filtrar episódios pelo nome do podcast (ex: Flow, Venus). 

API
A interação com o sistema é feita através de uma API REST que retorna os dados em formato JSON.

Modelo de Dados
Cada episódio de podcast na resposta da API seguirá o seguinte modelo:

```JSON

{
  "podcastName": "string",
  "episode": "string",
  "videoId": "string",
  "cover": "string (URL)",
  "link": "string (URL)",
  "categories": ["string"]
}
Exemplo de Resposta
JSON

[
  {
    "podcastName": "flow",
    "episode": "DANIEL LOPES - Flow #449",
    "videoId": "pThrdd0jyEA",
    "cover": "https://i.ytimg.com/vi/pThrdd0jyEA/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pThrdd0jyEA",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "DILERA - Flow #375",
    "videoId": "LbBNooBc-E8",
    "cover": "https://i.ytimg.com/vi/LbBNooBc-E8/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=LbBNooBc-E8",
    "categories": ["saúde", "humor"]
  }
]``` 

Endpoints
Método	Endpoint	Descrição
GET	/api/podcasts	Retorna a lista completa de todos os episódios.
GET	/api/podcasts?name={nome}	Filtra e retorna os episódios do podcast nome.

Exportar para as Planilhas
Exemplos de uso:

Listar todos: GET http://localhost:3636/api/podcasts

Filtrar por "flow": GET http://localhost:3636/api/podcasts?name=flow

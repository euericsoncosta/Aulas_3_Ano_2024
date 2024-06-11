const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const port = 3000;

//adicionando a pasta public
app.use(express.static(path.resolve(__dirname, "public")));

// Importando as rotas
const homeRouter = require("./src/routes/routes");

// Configuração do Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Especificando o diretório de visualizações
app.set("views", "./src/views");

// Roteamento
app.use("/", homeRouter);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`O servidor está em http://localhost:${port}`);
});

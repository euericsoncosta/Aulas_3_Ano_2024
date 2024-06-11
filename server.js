const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const port = 3000;

//adicionando a pasta public
app.use(express.static(path.resolve(__dirname, "public")));

// Importando as rotas
const animaisRouter = require("./src/routes/animaisRoutes");

// Configuração do Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Especificando o diretório de visualizações
app.set("views", path.resolve(__dirname, "src", "views"));

// Roteamento
app.use("/animais", animaisRouter);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`O servidor está em http://localhost:${port}`);
});

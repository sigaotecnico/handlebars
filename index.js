// Importando módulos necessários para a aplicação
const express = require('express'); // Framework web para Node.js
const app = express(); // Criando uma instância do Express

// ** Código incluído durante a Aula 03 
const hbs = require('express-handlebars'); // Template engine para renderizar HTML

// Configurando variáveis essenciais para o funcionamento da sua aplicação
const PORT = 3000; // Define a porta do servidor

// Configuração dos Middlewares do seridor de aplicação
/* Middleware é um ajudante que executa tarefas específicas entre o momento em que 
um servidor recebe um pedido (como quando alguém clica em um link ou envia um formulário 
em um site) e o momento em que o servidor responde a esse pedido.*/
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'

// ** Código incluído durante a Aula 03 
// Configurações do Handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs', // Define a extensão dos arquivos de template
    defaultLayout: 'main' // Define o layout padrão
})); 
app.set('view engine', 'hbs'); // Define o Handlebars como o motor de renderização de templates

// ** Código incluído durante a Aula 03 
// Rota para a página Cadastrar
app.get('/', (req, res) => {
    // Renderiza a página inicial
    res.render('index',{MinhaVariavel: 'Batata Assada'});
    //res.send('<h1>Eu sou a página principal</h1>')
});

// Rota para listar usuários
app.get('/users', (req, res) => {
    // Renderiza a página usuarios   
    // res.render('users');
    res.send('<h1>Eu sou a página de usuários</h1>');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
});

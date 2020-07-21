# controle-usuário

## Começando

- É necessário ter o [Node](https://https://nodejs.org/en/) instalado na sua máquina  
- É necessário também instalar o [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads), o banco utilizado no projeto  


## Construção
Para termos o projeto pronto para execução necessitamos que digite o seguinte comando no terminal, estando dentro da paste em que o projeto está salvo
```shell
npm install
```
Esse comando vai instalar todas as dependências necessárias para o correto funcionamento do projeto.

Após isso, vá ao arquivo `knexfile.js` (deve estar na pasta raiz do projeto). Lá você verá a seguinte configuração

```js
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'teste_estagio', //Digite aqui o nome do database a ser utilizado
      user: 'postgres' //Digite aqui o seu usúario do banco
      password: '0000' //Digite aqui a sua senha do banco
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
```

## Composição do projeto

Para o desenvolvimento do projeto foram utilizadas as seguintes ferramentas:

- NodeJS: Utilizado para construção do backend da aplicação
- Express: Pacote do Node para construção das rotas a serem consumidas na aplicação
- Nunjucks: Template Engine utilizada para a construção do layout da aplicação
- Bootstrap: Framework utilizado para otimizar a estilização de algums componentes da aplicação
- Knex.js: Pacote do Node que funciona como query builder, facilitando a escrita do SQL através de código Javascript.
- Nodemon: Pacote do Node utilizado para que se faça o autoreload do servidor cada vez que um arquivo do mesmo for modificado (utilizado somente como dependência de desenvolvimento)
- Method Override: Pacote do Node utilizado para que possamos utilizar métodos HTTP não suportados pelos formulários html (put e delete). Assim contruímos uma aplicação com o correto padrão REST
- pg: Pacote do Node para podermos utilizar o PostgreSQL na nossa aplicação

## Features

Nosso projeto trata-se de um CRUD de usuários, onde cada usuário possui um nome, email e senha cadastrados em um banco de dados.

## Inicialização do projeto

- Para inicializarmos o projeto primeiramente devemos iniciar o nosso banco de dados PostgreSQL.
- Após feito isso podemos inicializar o nosso servidor. Abrindo o terminal no diretório onde está nosso projeto executamos o comando

 ```shell
 npm start
 ```

 Com o uso desse comando nosso servidor deverá estar rodando na porta 5000. 
 OBS: Se essa porta estiver ocupada, pode-se mudar no arquivo `src/server.js`
 Devemos também rodar as nossas migrations para a construção da tabela de usuários no nosso banco de dados. fazemos isso através do comando

 ```shell
 npx knex migration:latest
 ```

 Após criada a nossa tabela podemos rodar as seeds que vão popular o nosso banco e nos possibilitar uma melhor visualização do funcionamento da aplicação

 ```shell
 npx knex seed:run
 ```

Depois de executados esses comandos podemos utilizar nossa aplicação normalmente e ver as suas funcionalidades.

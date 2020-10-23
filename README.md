
<h1 align="center">
    Api template with ORM
</h1>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-commands">Commands</a>
</p>

# 🤹‍ ORM installation and configuration - Step by step
### 1st Step - CONNECTION

#### 1 - Comece criando uma pasta chamada database dentro de src.

#### 2 - Crie um arquivo de configuração chamado ormconfig.json.
    // Essa configuração é necessária para a nossa conexão ao banco de dados.
    {
        "type": "sqlite",
        "database": "./src/database/database.sqlite",
        "migrations": [
            "./src/database/migrations/*.ts"
        ],
        "entities": [
            "./src/models/*.ts"
        ],
        "cli": {
            "migrationsDir": "./src/database/migrations"
        }
    }
    
#### 3 - Dentro da pasta database crie um arquivo chamado connection.ts, ele fará a conexão com o nosso banco de dados.
    import { createConnection } from 'typeorm';

    createConnection();

#### 4 - Chame o arquivo connection.ts dentro de server, para que a conexão seja estabelecida.
    import './database/connection';

#### 5 - Crie um arquivo chamado database.sqlite, esse será nosso banco de dados.

#### 6 - Teste a conexão executando o comando 
    yarn dev

### 2nd Step - CREATING TABLES
- Nesse caso vou utilizar migration

#### 1 - Primeiro passo é configurar nosso projeto para que o typeorm seja executado com o typescript
##### No arquivo packege.json inclua esse comando dentro de "scripts":
    "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

#### 2 - Configure a migration no arquivo ormconfig.json:
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }

#### 3 - Crie a tabela users com o comando: 
    yarn typeorm migration:create -n create_nome_da_tabela
    
- após o comando é criado um arquivo dentro da pasta migration
- Siga o exemplo do arquivo para a criação da tabela

#### 4 - Crie a tebale no banco de dados com ocomando: 
    yarn typeorm migration:run
    
- Para testar se suas tabelas foram criadas, voce pode usar algum software, eu vou usar o beekeeper.

### 3rd Step - CREATING MODELS

#### 1 - Crie uma pasta chamada models dentro de src

#### 2 - Crie um model com o mesmo nome da tabela
- Siga o exemplo do arquivo para a criação do model.

#### 3 - No arquivo tsconfig em "strictPropertyInitialization" troque de true para false e as duas Experimental Options como true.

#### 4 - Siga o exemplo do arquivo UserController para gravar dados no banco

### 4th Step - CREATING RELATIONSHIP BETWEEN TABLES
#### 1 - Crie a tabela skills com o comando: 
    yarn typeorm migration:create -n create_nome_da_tabela

#### 2 - Crie a tebale no banco de dados com o comando: 
    yarn typeorm migration:run

#### 3 - Siga conforme as models User e Skill para criar o relacionamento OneToMany


## 👨‍💻 Technologies

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typeorm](https://typeorm.io/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)


# 💻 Commands
### typeorm command list
    yarn typeorm
    
### Create table 
    yarn typeorm migration:create -n create_nomeDaTabela
 
### Run migration
    yarn typeorm migration:run

### Revert migration
    yarn typeorm migration:revert

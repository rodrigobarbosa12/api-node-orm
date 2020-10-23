
<h1 align="center">
    Modelo de api com ORM
</h1>

#yarn typeorm mostra um log com vários comandos

# Cria tabela
- yarn typeorm migration:create -n create_nomeDaTabela

# Executa a migration
- yarn typeorm migration:run

# Revert a migration
- yarn typeorm migration:revert


# instalação e configuração ORM - Passo a passo
1º passo - CONEXÂO

1 - Comece criando uma pasta chamada database dentro de src.

2 - Crie um arquivo de configuração chamado ormconfig.json.
- Esse arquivo contem todas as informações do banco de dados.
- config do arquivo:
    {
        "type": "sqlite",
        "database": "./src/database/database.sqlite"
    }

3 - Dentro da pasta database crie um arquivo chamado connection.ts,
ele fará a conexão com o nosso banco de dados.
- config da conexão:
    import { createConnection } from 'typeorm';

    createConnection();

4 - Chame o arquivo connection.ts dentro de server, para que a conexão seja estabelecida.
- import './database/connection';

5 - Crie um arquivo chamado database.sqlite, esse será nosso banco de dados.

6 - Teste a conexão executando o comando 'yarn dev'


2º passo - CRIANDO TABELAS
- Nesse caso vou utilizar migration

1 - Primeiro passo é configurar nosso projeto para que o typeorm seja executado com o typescript
- No arquivo packege.json inclua esse comando dentro de "scripts":
    "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"

2 - Configure a migration no arquivo ormconfig.json:
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }

3 - Crie a tabela users com o comando: yarn typeorm migration:create -n create_nome_da_tabela
- após o comando é criado um arquivo dentro da pasta migration
- Siga o exemplo do arquivo para a criação da tabela

4 - Crie a tebale no banco de dados com ocomando: yarn typeorm migration:run
- Para testar se suas tabelas foram criadas, voce pode usar algum software, eu vou usar o beekeeper


3º passo CRIANDO MODELS

1 - Crie uma pasta chamada models dentro de src

2 - Crie um model com o mesmo nome da tabela, conforme o exemplo no arquivo

3 - No arquivo tsconfig em "strictPropertyInitialization" troque de true para false
e as duas Experimental Options como true.

4 - Siga o exemplo do arquivo UserController para gravar dados no banco


4º passo - CRIANDO RELACIONAMENTO ENTRE AS TABELAS
1 - Crie a tabela skills com o comando: yarn typeorm migration:create -n create_nome_da_tabela
- Exemplo no proprio arquivo

2 - Crie a tebale no banco de dados com o comando: yarn typeorm migration:run

3 - Siga conforme as models User e Skill para criar o relacionamento OneToMany
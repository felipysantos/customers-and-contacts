# Customer and contacts
Desenvolvimento de uma relação de usuários e contatos, incluindo frontend com React e backend com NodeJS. 

## Principais linguagens e tecnologias utilizadas

<br>

### Frontend

- React (principal biblioteca para construção do site)
- ContextAPI (para gerenciamento de estados)
- Chakra-UI (biblioteca de UI)
- Formulários com validação (Yup)
- Responsividade e adaptação de aplicação web para front.

<br>

### Backend

- NodeJS
- Typescript
- TypeORM
- Express (para integração do código através do protocolo HTTP)
- UUID (para geração de id)


<br>

## Escopo do projeto

A funcionalidade do projeto é bem simples, o sistema de cadastro de usuários envia para o banco de dados as informações coletadas no formulário, basta passar em todas as verificações. O login faz o envio do formulário, acessa o banco de dados e retorna o usuário, caso exista, e seus contatos.
A tela de perfil retorna as informações do usuário, tais como nome, email e número de telefone, tendo a opção de editá-las.
Na tela de contatos, você visualiza a lista de contatos, podendo adicionar novos contatos ou deletá-los.

<br>

### Backend

- **1. Cadastro de usuário POST/client**

    O usuário tem de fornecer o nome, o email e o número de celular. Faça as validações básicas, caso já exista um usuário, retorna um erro 400.
    Para criar um admin, deverá ser feito diretamento com o servidor, passando a propriedade isAdmin = true, para isso, recomenda-se o uso de algum framework de teste API Client, como Insomnia.

<br>

- **2. Ver usuários cadastrados GET/client/all/:id**

    Esse endpoint deve retornar uma lista com todos os usuários cadastrados no banco, o acesso deve ser feito por um Admin e utilizar o Token JWT.
    
 <br>
 
- **3. Login de usuário POST/client/login**

    Esse endpoint deve recebe email e senha, faz a verificação com os usuários do banco e retorna dois valores, token e client, contendo id e nome do usuário, caso seja encontrado.

<br>

- **3. Atualização de usuário PATCH/client/:id**

    Essa rota recebe o id do usuário, como query params, o token(deve ser passado da seguinte forma:  headers:{authorization: `${token}`}) para validação de usuário e recebe como json, nome, email e telefone.

<br>

- **4. Atualização de usuário PATCH/client/:id**

    Essa rota recebe o id do usuário, como query params, o token(deve ser passado da seguinte forma:  headers:{authorization: `${token}`}) para validação de usuário e recebe como json, nome, email e telefone.

<br>

- **5. Deleção de usuário DELETE/client/:id**

    Essa rota recebe o id do usuário, como query params, o token(deve ser passado da seguinte forma:  headers:{authorization: `${token}`}) para validação de usuário e confirmação para deleção.

<br>

<br><br>

- ### Instruções para uso local do Backend

    1. Clone o repositório
    2. Acesse a pasta **backend**
    3. Instale as dependências através do comando **yarn**
    4. Configure o arquivo .env para usuário local
    5. Inicie a aplicação através do comando **yarn start**
    6. Por padrão, o servidor é executado na porta localhost:3333
    
<br><br>

### Frontend

A aplicação faz uma requisições no banco, pelo arquivo api.js, fazendo todas as requisições necessárias.  

<br>

- ### Instruções para uso local do Frontend
 
    1. Clone o repositório
    2. Acesse a pasta **frontend**
    3. Instale as dependências através do comando **yarn**
    4. A aplicação por padrão, faz a requisição no servidor do Heroku, para rodar localmente, altere a **baseUrl** do arquivo **api.js** da pasta **services**, para localhost:3000 (deve ser diferente da porta 3333 do backend)
    5. Inicie o servidor local do backend
    6. Inicie a aplicação através do comando **yarn start**
    
<br><br>





## Canais de comunicação

**Felipy Santos**: **Desenvolvedor full-stack | Designer** 

- [Linkedin](https://www.linkedin.com/in/felipy-santos/)
- [Github](https://github.com/felipysantos)
- [Email](felipys23@gmail.com)

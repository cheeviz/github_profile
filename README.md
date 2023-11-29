# GITHUB PROFILE

Projeto que permite a pessoa procurar um usuário do github e mostra os os dados que API do Github retorna.

## Funcionalidades

- Procurar usuário do github
- Estatística das linguages mais usadas

## Pré-requisitos

Antes de começar, certifique-se que tenha o seguinte instalado em sua maquina:

- Node.JS [Donwload](http://nodejs.org)

## Como iniciar o projeto

1. **Clone o repostório:**

```bash
git clone https://github.com/cheeviz/github_profile.git
```

2. **Acesse o diretório do projeto:**

```bash
cd github_profile
```

3. **Instale as dependências:**

```bash
yarn install
# ou
npm install
```

4. **Crie uma .env**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_TOKEN=SEU TOKEN DO GITHUB
```

5. **Inicie o servidor de desenvolvimento:**

```bash
yarn run start
# ou
npm run start
```

5. **Abra o aplicativo em seu navegador em:** http://localhost:3000

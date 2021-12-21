# blog-challenge

Desafio do terceiro módulo da trilha de React do bootcamp Ignite da Rocketseat.

O desafio consiste em criar um blog, consumindo as postagens de um CMS, a partir de um layout no Figma.

## Projeto

Esse projeto é um desafio da [Rocketseat](https://www.rocketseat.com.br/).

## Fundamentos

- NextJs
- Sass
- SSR e SSG
- Conexão com CMS (Prismic)
- Paginação de conteúdo
- Aplicação de layout (Figma)
- Formatação de datas com date-fns

## Desafio

- [x] Construir a aplicação segundo o [layout do Figma](https://www.figma.com/file/0Y26j0tf1K2WB5c1ja5hov/Desafios-M%C3%B3dulo-3-ReactJS/duplicate)
- [x] Consumir postagens de um CMS (Prismic)
- [x] Paginação das postagens
- [x] Geração de páginas estáticas

## Como rodar o projeto

1. Faça um clone do repositório na sua máquina.
2. Execute o comando `yarn` na pasta raiz do projeto.
3. Crie um arquivo `.env.local` na pasta raiz do projeto, e adicione a váriavel `PRISMIC_API_ENDPOINT`, com o endpoint de um blog do [Prismic](https://prismic.io/).
4. Execute o comando `yarn start` para rodar o projeto.
5. Acesse http://localhost:3000/ para acessar o projeto.

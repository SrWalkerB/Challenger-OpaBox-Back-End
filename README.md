# Challenger-OpaBox-Back-End

## Conteudos

* [Sobre](#Sobre)
* [Features](#Features)
* [Instalação](#Instalação)
* [Como usar](#Como-Usar)
* [Avisos](#Avisos)

## Sobre

### Desafio técnico da empresa "opabox" referente ao Back-End.

## Features

- [X] Desafio A
- [X] Desafio B
- [X] Testes Automatizados

## Instalação

```
git clone https://github.com/SrWalkerB/Challenger-OpaBox-Back-End.git    (Clonando o Projeto)
```
```
npm install    (Instalando as dependencias)
```

## Como usar

### O Back-End tem 2 rotas, uma rota para desafio A e outra para o desafio B, para saber os nomes exatos das rotas e utilizar verifique na pasta "routes", e para saber o que passar no "body" da requisição olhe o arquivo "challenger_Controllers.ts"

```
npm start    (Rodando projeto)
```
```
npm run dev  (Rodando como desenvolvedor)
```
```
npm run test  (Para execultar os testes)
```
### Para usar esse Back-End junto com front-end é necessário que o Back-End esteja sendo execultado
### Front-End disponível em: https://github.com/SrWalkerB/Challenger-OpaBox-Front-End

## Avisos 

### No arquivo que descreve a avaliação, é dito que na parte 2 do back-end é pra criar uma rota do tipo "GET" para "/interlace" e que recebe um "JSON", porém olhando a documentação da MDN, notei que requisições do tipo "GET" não envia request com "body", optei assim usar "POST", o resultado é o mesmo.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET

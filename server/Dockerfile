FROM node:19-alpine3.18

WORKDIR /server

COPY package.json .

RUN npm i -g pnpm

RUN pnpm i

COPY . .

CMD [ "node","server.js" ]
FROM node:19-alpine3.18

WORKDIR /server

COPY package.json .

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE 80

CMD [ "node","server.js" ]
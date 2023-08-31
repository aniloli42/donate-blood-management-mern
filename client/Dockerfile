FROM node:19-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE 3000

CMD [ "pnpm","start" ]
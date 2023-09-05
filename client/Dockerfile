FROM node:19-alpine3.18

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm@latest

RUN pnpm i --frozen-lockfile

COPY . .

EXPOSE 3000

CMD [ "pnpm","start" ]
# Base Setup
FROM node:19-alpine3.18 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /server


FROM base AS prod-deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile


FROM base
COPY --from=prod-deps /server/node_modules /server/node_modules
COPY . /server/
EXPOSE 5000
CMD [ "node","src/server.js" ]



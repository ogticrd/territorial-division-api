#####################################
##           Dependencies          ##
#####################################
# Install dependencies only when needed
FROM node:lts-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
# copy the package.json to install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

#####################################
##               Build             ##
#####################################
FROM node:lts-alpine as builder

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

# some projects will fail without this variable set to true
ARG SKIP_PREFLIGHT_CHECK
ENV SKIP_PREFLIGHT_CHECK ${SKIP_PREFLIGHT_CHECK:-false}
ARG DISABLE_ESLINT_PLUGIN
ENV DISABLE_ESLINT_PLUGIN ${DISABLE_ESLINT_PLUGIN:-false}

WORKDIR /app

# build app for production with minification
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

#####################################
##               Release           ##
#####################################
FROM node:lts-alpine as release

RUN apk add --no-cache dumb-init

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-development}

ENV PORT 3000
ENV HOST 0.0.0.0

WORKDIR /app

USER node

COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE ${PORT}

CMD ["dumb-init", "node", "dist/main.js"]

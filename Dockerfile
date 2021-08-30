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

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

# some projects will fail without this variable set to true
ARG SKIP_PREFLIGHT_CHECK
ENV SKIP_PREFLIGHT_CHECK ${SKIP_PREFLIGHT_CHECK:-false}
ARG DISABLE_ESLINT_PLUGIN
ENV DISABLE_ESLINT_PLUGIN ${DISABLE_ESLINT_PLUGIN:-false}
# App specific build time variables (not always needed)
ARG REACT_APP_API_URL
ARG REACT_APP_API_URL ${REACT_APP_API_URL:-http://localhost}

WORKDIR /app

# build app for production with minification
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

#####################################
##               Release           ##
#####################################
FROM node:lts-alpine as release

# get the node environment to use
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-development}

ENV PORT 80
ENV HOST 0.0.0.0

WORKDIR /app

USER node

COPY --chown=node:node --from=builder /app/dist ./

EXPOSE ${PORT}

CMD ["dumb-init", "node", "main.js"]

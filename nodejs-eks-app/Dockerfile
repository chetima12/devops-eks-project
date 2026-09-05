# ================================
# Build stage
# ================================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src


# ================================
# Production stage
# ================================
FROM node:22-alpine

WORKDIR /app

RUN apk update && apk upgrade

RUN rm -rf \
    /usr/local/lib/node_modules/npm \
    /usr/local/lib/node_modules/corepack \
    /opt/yarn-v1.22.22 \
    /usr/local/bin/npm \
    /usr/local/bin/npx \
    /usr/local/bin/corepack

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/package*.json ./

ENV NODE_ENV=production
ENV PORT=3000

USER node

EXPOSE 3000

CMD ["node", "src/server.js"]
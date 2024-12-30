FROM node:19-alpine AS base

WORKDIR /app

COPY package*.json ./

# Installation avec legacy-peer-deps pour gérer le conflit React 19/framer-motion
RUN npm install --legacy-peer-deps

COPY . .

# Build
RUN npm run build

# Production image
FROM node:19-alpine AS production
WORKDIR /app

COPY --from=base /app/build ./build
RUN npm install -g serve

EXPOSE 3002

CMD ["serve", "-s", "build", "-l", "3002"]
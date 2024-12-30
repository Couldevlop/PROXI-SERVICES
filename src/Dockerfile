FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

# Installer avec --legacy-peer-deps pour résoudre le conflit
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3002

CMD ["serve", "-s", "build", "-l", "3002"]
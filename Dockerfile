FROM node:lts-alpine AS builder

RUN npm install -g ts-node

WORKDIR /user/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","start"]
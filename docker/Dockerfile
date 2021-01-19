FROM node:14.15.4-alpine3.12

WORKDIR /vue-press

RUN apk update

COPY package.json yarn.lock ./

RUN yarn install

FROM node:14-buster-slim

RUN apt-get update && apt-get upgrade -y

COPY . /app

WORKDIR /app

RUN yarn install

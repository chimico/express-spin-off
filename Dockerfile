FROM node:24-alpine

RUN apt get update && apt get upgrade -y

COPY . /app

WORKDIR /app

RUN npm install

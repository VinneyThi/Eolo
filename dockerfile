FROM node:alpine

RUN mkdir -p /home/eolo

WORKDIR /home/eolo

COPY package*.json ./

RUN npm install

COPY . .

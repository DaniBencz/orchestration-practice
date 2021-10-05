FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "node", "." ]

# docker build -t attribute_service .
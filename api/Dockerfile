FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "node", "." ]

# if build is not defined in compose file:
# docker build -t behold_api .

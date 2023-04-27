FROM node:18.15.0-alpine

WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 8080

RUN yarn build

CMD ["yarn", "preview"]

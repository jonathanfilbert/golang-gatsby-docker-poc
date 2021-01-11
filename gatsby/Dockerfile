FROM node:alpine as builder

WORKDIR /usr/src/gatsby

COPY package.json .

COPY yarn.lock .

RUN yarn global add gatsby-cli

RUN yarn

COPY . .

RUN yarn build

FROM nginx:latest

EXPOSE 80

COPY --from=builder /usr/src/gatsby/public /usr/share/nginx/html
FROM node:15-alpine3.10 as prod

WORKDIR /app

COPY package*.json ./

RUN yarn

ENV NODE_ENV=production


EXPOSE 3000

COPY  . .

CMD ["yarn","start" ]
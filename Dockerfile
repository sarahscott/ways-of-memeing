FROM node:6.11

RUN npm install -g yarn

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn install

ENV PORT 80
EXPOSE 80

CMD yarn start

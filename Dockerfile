FROM node:21-alpine3.17

LABEL "AUTHOR"="Harpreet Singh"

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "run", "serverStart" ]

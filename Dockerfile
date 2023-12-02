FROM node:21-alpine3.17

ADD AUTHOR="Harpreet Singh"

WORKDIR /app

COPY . .

CMD [ "npm", "run", "serverStart" ]

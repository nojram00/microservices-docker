FROM node:23-alpine3.19

WORKDIR /var/www/app

COPY . /var/www/app/

RUN npm install

RUN npm run build

CMD [ "npm", "run", "dev", "--", "--host" ]

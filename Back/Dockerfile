FROM node:12.18
EXPOSE 3010

WORKDIR /app

ADD package.json /FUAC-BACKEND/
RUN npm install

ADD . /FUAC-BACKEND/

CMD [ "npm", "start" ]
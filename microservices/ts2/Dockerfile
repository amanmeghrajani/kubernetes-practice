FROM node:10

RUN npm config set strict-ssl false
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3002

ENTRYPOINT ["node", "index"]
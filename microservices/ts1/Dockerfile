FROM node:10


WORKDIR /app
RUN npm config set strict-ssl false

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3001

ENTRYPOINT [ "node", "index" ]
FROM node:16-alpine
WORKDIR /usr/src
COPY package*.json ./
COPY . /usr/src/
EXPOSE 3000
RUN npm i @angular/cli@14.0.5
RUN npm install
RUN npm run build
CMD ["npm", "run","start"]

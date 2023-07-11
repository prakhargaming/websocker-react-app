FROM node:20-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY . /app

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]

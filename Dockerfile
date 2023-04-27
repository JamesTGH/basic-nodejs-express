FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN apk add --update nodejs npm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD nginx -g "daemon off;" & node index.js
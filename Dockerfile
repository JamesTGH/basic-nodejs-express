FROM debian:latest

RUN apt-get update \
    && apt-get install -y nginx curl gnupg2 \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD nginx -g "daemon off;" & node index.js
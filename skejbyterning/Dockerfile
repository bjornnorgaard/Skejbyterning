# Stage 0, based on Node.js, to build and compile Angular
FROM node:9.8 as node
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
ARG env=prod
RUN npm run build --environment $env

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13.3-alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
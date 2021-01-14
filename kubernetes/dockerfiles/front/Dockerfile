FROM node:14.15.4-alpine as stage

# 参考
# https://wmzy.github.io/svelte-cli/guide/deployment.html#docker-nginx

# build
# cd /path/to/front-end-tech-comparison/kubernetes
# docker build -f kubernetes/dockerfiles/front/Dockerfile \
# -t image-name \
# --build-arg APP_FILE_BASE_DIR=sample-boxfish-with-sveltstrap .

# run
# docker run -p 5000:80 image-name

ARG APP_FILE_BASE_DIR

ENV NGINX_PID_FILE "/var/run/nginx.pid"
ENV DOCUMENT_ROOT "/opt/app"
ENV NGINX_CONF "/etc/nginx/nginx.conf"

WORKDIR /opt/app

COPY "${APP_FILE_BASE_DIR}/rollup.config.js" ./
COPY "${APP_FILE_BASE_DIR}/package*.json" ./
COPY "${APP_FILE_BASE_DIR}/tsconfig.json" ./

COPY kubernetes/dockerfiles/front/nginx.conf ${NGINX_CONF}


RUN npm install

COPY "${APP_FILE_BASE_DIR}/src" ./src
COPY "${APP_FILE_BASE_DIR}/public" ./public

RUN npm run build

FROM nginx

ENV DOCUMENT_ROOT "/opt/app"
ENV NGINX_CONF "/etc/nginx/nginx.conf"

RUN mkdir -p ${DOCUMENT_ROOT}
COPY --from=stage /opt/app/public ${DOCUMENT_ROOT}
COPY --from=stage ${NGINX_CONF} ${NGINX_CONF}
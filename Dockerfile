# Stage 0 - Build Frontend Assets
FROM node:12.16.3-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
ENV REACT_APP_GRPC_ENDPOINT=http://localhost:9011
ENV REACT_APP_GRPC_CLIENT_ID=tzero.softwarealgo.com
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
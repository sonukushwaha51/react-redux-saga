# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Cloud Run listens on port 8080 by default; Nginx uses 80. 
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
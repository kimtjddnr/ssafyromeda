FROM node:16.13.0 as build-stage
WORKDIR /var/jenkins_home/workspace/Deploy/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/Deploy/frontend/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]

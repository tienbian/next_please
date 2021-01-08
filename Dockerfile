FROM node:12.18.1
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY ecs.entrypoint.sh /usr/local/bin/ecs.entrypoint.sh
RUN chmod +x /usr/local/bin/ecs.entrypoint.sh
RUN npm install --only=production
COPY --from=0 /app/dist ./dist
EXPOSE 5000
ENTRYPOINT ["ecs.entrypoint.sh"]
CMD [ "npm", "run", "pm2" ]

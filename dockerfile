FROM node:18

LABEL maintainer="Sai Kalyan <kalyanw9700128>"

WORKDIR /app

COPY package*.json ./

RUN npm ci && \
    # Build the React app
    npm run build

COPY . .

EXPOSE 5173

CMD ["npm", "run", "preview"]
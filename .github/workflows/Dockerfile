FROM node:18-slim

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

# Start with newrelic preloaded (safe option)
CMD ["node", "-r", "newrelic", "index.js"]

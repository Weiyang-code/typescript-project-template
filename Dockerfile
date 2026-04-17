From node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROm node:22-alpine
WORKDIR /app

COPY --from=builder /app/dist ./
RUN npm install --omit=dev
CMD [ "npm", "start"]
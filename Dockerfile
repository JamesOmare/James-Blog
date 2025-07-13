# Dockerfile
FROM node:22.11.0-alpine

WORKDIR /app

# Copy package.json and optionally package-lock.json
COPY package.json package-lock.json* ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the app
COPY . .

# Start the development server
CMD ["npm", "run", "dev"]

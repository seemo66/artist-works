# Dockerfile (Single stage for simplicity and compatibility with make dev/test)
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (development dependencies are needed for 'make test')
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the default Nuxt port
EXPOSE 3000

# Default command (will be overridden by docker-compose for 'make dev')
CMD ["npm", "run", "dev"]
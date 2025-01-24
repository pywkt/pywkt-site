# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm config set registry http://registry.npmjs.org/ && \
    npm config set strict-ssl false && \
    npm install

# Copy the rest of the application
COPY . .

# Set PATH for node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

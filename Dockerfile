# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first
COPY package.json package-lock.json ./
RUN npm config set registry http://registry.npmjs.org/ && \
    npm config set strict-ssl false && \
    npm install --include=dev

# Copy the rest of the application
COPY . .

# Explicitly install next
RUN npm install next

# Build the application
RUN node_modules/.bin/next build && \
    node_modules/.bin/next-sitemap

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

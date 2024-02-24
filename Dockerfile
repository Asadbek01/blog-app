# Use the official Node.js image with Alpine Linux as a base image for the builder stage
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@latest

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Build the Angular app with the production configuration
RUN ng build --configuration=production

# Use a lightweight nginx image as the final image
FROM nginx:alpine

# Copy the built Angular app to the nginx public directory
COPY --from=builder /app/dist/blog-app /usr/share/nginx/html 

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

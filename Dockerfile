# Build creation stage
FROM node:18 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install project depencencies
RUN npm install

# Copy all the source code to the container
COPY . .

# Install Angular CLI globally inside the container
RUN npm install -g @angular/cli

# Build Angular application with production setup
RUN ng build --configuration=production

# Production stage
FROM nginx:alpine

# Copy the static files generated in the previous stage to the Nginx server
COPY --from=build-stage /app/dist/angular-omdbapi-test /usr/share/nginx/html

# Expose port 80 of the container
EXPOSE 80

# Command to start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

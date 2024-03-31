# Use the latest nginx image from Docker Hub
FROM nginx:latest

# Remove the default nginx configuration file to avoid conflicts
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy custom nginx maps configuration file
COPY maps.conf /etc/nginx/conf.d/maps.conf

# Copy custom error HTML page to nginx default HTML directory
COPY error.html /usr/share/nginx/html/error.html
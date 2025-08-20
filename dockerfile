# Use official nginx image
FROM nginx:alpine

# Copy project files to nginx html folder
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80

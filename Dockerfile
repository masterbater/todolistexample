
FROM php:8.3-apache

# Install SQLite and required PHP extensions
RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev \
    && docker-php-ext-install pdo_sqlite

# Enable Apache rewrite module (if you need to use .htaccess or rewrites)
RUN a2enmod rewrite

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy the application files into the container's working directory
COPY . /var/www/html/

# Expose the port the app will run on
EXPOSE 80

# The command to run when the container starts
CMD ["apache2-foreground"]
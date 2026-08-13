# ─────────────────────────────────────────────────────────────────────────────
# Backend — Laravel 11 API (nginx + php-fpm)
# Multi-stage: composer deps → php-fpm runtime + nginx
# nginx listens on :8000 (HTTP) and FastCGI-forwards to php-fpm :9000.
# ─────────────────────────────────────────────────────────────────────────────

# ── Composer deps stage ─────────────────────────────────────────────────────
# Use PHP 8.2 CLI (same minor as the runtime image) so Composer resolves
# dependencies against the PHP version that will actually run them.
FROM php:8.2-cli-alpine AS vendor
RUN apk add --no-cache curl git unzip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
WORKDIR /app
COPY composer.json composer.lock ./
# --no-dev: production deps only. Autoloader is generated here (optimized).
RUN composer install --no-dev --no-scripts --optimize-autoloader

# ── Runtime stage ────────────────────────────────────────────────────────────
FROM php:8.2-fpm-alpine

# System deps + PHP extensions (pdo_mysql required for the MySQL driver)
RUN apk add --no-cache \
        libzip-dev \
        zip \
        unzip \
        curl \
        nginx \
    && docker-php-ext-install pdo pdo_mysql \
    && docker-php-ext-enable pdo_mysql

WORKDIR /var/www/html

# App code
COPY . .

# Vendor from the composer stage (already optimized autoload)
COPY --from=vendor /app/vendor ./vendor

# Laravel storage + bootstrap caches
RUN mkdir -p storage/framework/{sessions,views,cache} storage/logs bootstrap/cache \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# nginx site config: FastCGI to php-fpm, static files served directly
COPY docker/nginx-backend.conf /etc/nginx/conf.d/default.conf

# Entrypoint runs migrations before starting nginx + php-fpm
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh \
    && mkdir -p /run/nginx /var/log/nginx /var/cache/nginx

EXPOSE 8000
ENTRYPOINT ["entrypoint.sh"]
CMD ["sh", "-c", "nginx -g 'daemon off;' & php-fpm -F"]

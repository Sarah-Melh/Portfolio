#!/bin/bash

cd /var/www/html/

chmod -R 755 /var/www/html
chown -R www-data:www-data /var/www/html

# Démarrer Apache en avant-plan (par défaut pour garder le conteneur en vie)
apache2-foreground
# Portfolio

Ce projet est le sujet d'un examen de formation en développement web et web mobile.
Il s'agit de mettre en pratique ce que j'ai appris en front-end qui est la première moitié de ma formation. Il servira de base à ce qui qui deviendra mon portfolio.
Vous pourrez y trouver quelques aperçus des réalisations et projets que j'ai fait.
Ce n'est q'un début, il est destiné à évoluer.

## Fonctionnalités
 - Affichage dynamique des pages accueil, réalisaitons et parcours.
 - Exposition de projets réalisés avec images et description.
 - Possibilité d'avoir accès à mon cv.
 - Une page de formulaire de contact avec fenêtre de validation côté client.
 - Une page indépendant mentions légale

 ## Technologies utilisées
  - HTML5 - structure générale
  - SCSS - style et animations
  - JavaScript - navigation dynamique / validation de formulaire
  - Framerwork :
    - Bootstrap
    - jQuery
  - Docker - environnement de développement

## Structure simplifiée
```
/config
    /php.ini
    /vhost
    /Dockerfile
    /entrypoint.sh
    /init.sql

/src/
    /docs/
    /public/
        /assets/
            /imgs/
            /logo/
            /fonts/
        /css/
            /frameworks/
            /normalize.min.css
            /style.min.css
            /zonning.min.css
        /scss/
            /_colors.scss
            /_fonts.scss
            /_keyframes.scss
            /_mixins.scss
            /_extends.scss
            /normalize.scss
            /zoning.scss
            /style.scss
        /js/
            /frameworks/
            /main.js
        /includes/
            /contacts.html
            /mentions_legales.html
        /index.html
        /storage/

/docker-compose.yml
/README.md
```

## Installation

Clonez le projet sur votre répertoire local

 ```bash
 git clone https://github.com/Sarah-Melh/Portfolio.git
  ```

## <u>Docker</u> : utilisation des conteneurs

### 1. Modifier le fichier docker `docker-compose.yml` si nécessiare

Les paramètres modifiables sont :
- `MYSQL_DATABASE` : nom de la base de données
- `MYSQL_USER` : nom d'utilisateur
- `MYSQL_PASSWORD` : mot de passe
- `MYSQL_ROOT_PASSWORD` : mot de passe root

### 2. Démarrer le container
Commande :
```bash
docker-compose up --build
```
### 3. Accéder à mariadb
Commandes :
```bash
docker exec -it mariadb bash
```

```bash
mariadb -u root -p
```
Entrez le mot de passe `root` renseigné dans le fichier `docker-compose.yml`
Vous pourrez ainsi gérer les autorisations utilisateurs ainsi que la base de données. Ou tout simplment relier votre conteneur à votre application.

### 4. Accéder à l'application depuis le container Docker

Entrez l'adresse suivante dans le navigateur : http://localhost:7070

### 5. Retirer le conteneur de votre environnement
Commande :
```bash
docker-compose down
```







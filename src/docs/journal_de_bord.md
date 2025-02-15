# Journal de bord

## Sprint 1 : Organisation du projet
### Ce que je prévois
- Création des user-stories
- Création du backlog
- Wireframe et prototype
- Réunir le matériel graphique pour le projet
- Mise en place des Sprints
- Début du README
- Initialisation git hub

### Ce qui a été
- Dans l'ensemble tout s'est bien passé.

### Ce qui s'est mal passé
- Un de difficulté pour intégrer les fichier dans le projet
sur github. Résolu assez facilement.


-------
-----

## Sprint 2 : Page d'accueil
### Ce que je prévois
- HTML de la navbar et du footer :
    - liens 
    - insertion du logo
- Carte du texte de présentation
- Cartes des compétences avec checkbox
- Boutons pour faire apparaître les cartes de compétences

### Ce qui a été
- Le tout s'est bien passé
- J'ai décidé de remplacer la multitude de boutons
par un menu déroulant
- Il n'y aura qu'un bouton pour faire apparaître la carte choisie

### Ce qui s'est mal passé
- Un peu de mal à me souvenir de certaines balises peut utilisées.
Résolu facilement.
### A revoir 
- Insérer le texte de présentation

-------
-----
## Sprint 3: Page "réalisations"
### Ce que je prévois
- Cartes des projets:
    - insertion des images
    - textes de présentation
    - slide show si nécessaire
### Ce qui a été
- La création de cartes
- l'insertion des images

### Ce qui s'est mal passé
- Le slide show se fera en scss

### A revoir (si il y a du temps)
- Insérer les textes de présentation
- faire des dépôts git de certains projets
- mettre les liens git hub dans la description

-------
-----
## Sprint 4 : Page "CV"
### Ce que je prévois
- Carte du CV
- Insertion de l'image du CV

### Ce qui a été
- Aucun problème sur cette phase
- ajout d'une petite carte de texte


-------
-----
## Sprint 5 : Page "contact"
### Ce que je prévois
- Report du header et du footer
- Formulaire de contact en HTML

### Ce qui a été
- aucun problème


---------------------
-------------------

## Sprint 6: Page "mentions légales"
### Ce que je prévois
- Report du header et du footer
- Carte des mentions légales

### Ce qui a été
- aucun problème

---------------------
-------------------

## Sprint 7: Style général
### Ce que je prévois
- Création des feuilles SCSS font, colors, mixins
- Couleurs du background header et footer
- Couleurs du background du body
- Insertion de l'image de fond
- Harmonisation des polices et des images
- Stylisation des boutons
- Stylisation des cartes

### Annotation 
- l'ordre des sprints ne correspond pas à la procédure nécessaire 
pour une future navigation correcte.
- revoir l'odre des sprints pour faciliter le travail

---------------------
-------------------

## Sprint A : réorientation
### Ce que je prévois
- Révision des priorités de la gestion de projet
    - revoir l'ordre des sprints et, si besoin, leur contenu
- Construction du système de navigation 
    - gérer l'affichage dynamique des pages en html et js
- Travail sur le système d'affichage
    - préparer la structure de base pour un affichage dynamique des contenus

---------------------
-------------------

## Sprint 7 : JS 
### Ce que je prévois
- Général
    - Mise en place du menu dynamique
    - relier les pages indépendantes
- Page d'accueil
    - fonction de sélection de la carte voulue
- Page "réalisations"
    - Boutons de slide show
- Page formulaire de contact
    - Vérification des contenus des champs du formulaire
    - Vérification de la validité de saisie de l'email
    - Bouton submit de la page contact

### Ce qui a été
- les idées pour les liens sont venues assez rapidement
- la fonction de vérification
- fonctions des boutons
### Ce qui s'est mal passé
- créer les fonctions pour les liens dynamiques et
les liens depuis les pages indépendantes  
    -> beaucoup de temps passé dessus (retard sur le reste)
- je repousse une partie de ce sprint à plus tard
- j'ai abandonné l'idée des slides-show pour les projets  
    -> cette option est remise à plus tard

### Résolution
- après beaucoup de tatônnements, la fonction de navigation est fonctionnelle.

---------------------
-------------------

## Sprint 8 : Style général
- Création des feuilles SCSS font, colors, mixins
- Couleurs du background header et footer
- Couleurs du background du body
- Insertion de l'image de fond
- Harmonisation des polices et des images
- Stylisation des boutons
- Stylisation des cartes

### Ce qui a été
- L'ensemble s'est déroulé correctement

### Ce qui s'est mal passé
- problème de réponse du scss sûrement dû au dédoublement des fichier  
    -> **résolution:** refaire tout le fichier à partir d'une sauvegarde  
    Il s'agissait d'une erreur dans la feuille extend (oubli d'un appel du fichier 'colors'). En conséquence de ce problème, il y a eu un problème 
    de merge sur l'arbre git (sûrement dû à la fatigue).

---------------------
-------------------

## Sprint 9 : Responsive
- Utiliser bootstrap pour les rows et colonnes 
    (attention à la classe card!)
- Si besoin: media queries en scss 

### Ce qui a été
- pour le format téléphone, l'ensemble s'est déroulé correctement

### Ce qui s'est mal passé
- bootstrap répondait très mal
    -> **résolution:** utilisation de média queries  
        le responsive est correct
- lors de la vérification des media queries je me suis aperçue que la page dynamique 'parcours' était visible  
    -> **résolution:** Je n'ai pas trouvé de solution
- par manque de temps, le responsive tablette n'est pas au point

---------------------
-------------------

## Sprint 10 : Style 
- Création des animations en SCSS:
    - apparition de l'image de fond 
    - apparition des cartes (remis à plus tard)
- Création des slides shows (remis à plus tard)

### Ce qui a été
- L'ensemble s'est déroulé correctement

### Ce qui s'est mal passé
- par manque de temps, j'ai renoncé à certains éléments du projet  
    -> éléments qui pourront être rajouté par la suite
- j'ai un peu cherché comment faire 
- le problème de responsive s'est répercuté sur l'animation la lune apparaît deux fois  
    -> **résolution:** Je n'ai pas trouvé de solution

---------------------
-------------------

## Sprint 12 : Ajouts
- Toute action notée comme devant être faite lors des retours
sur les sprints précédents

### SCSS
- factorisation partielle du code (manque de temps)
- ajout de style oublié lors des sprints précédents et ajustements
- minification du fichier scss et réglages de responsive

## Sprint 13 : Vérification
- finalidations des documents et suppressions des fichiers inutiles
- la plus grande partie de ce sprint à été faite pendant le précédant

---------------------
-------------------
## A faire plus tard
- insertion des textes de présentation des projets
- liens vers les projets présents sur github
- lien de téléchargement du dv
- animations supplémentaires
- création de carousel pour les cartes des projets
- responsive tablette et amélioration génrale du responsive
- achever l'aria-label et faire la vérificaiton du contraste
- création de carte de compétences 
- dynamiser l'affichage avec des framerwork
- alléger le code en ayant moins (plus) de html

### Oublis importants
- wireframe
- lien de téléchargement du cv

## Remarques 
- Je n'ai vu qu'à la fin que tous les fichiers css devaient être passé en scss  
- le système de minificationque j'ai employé n'a pas permis de supprimer les fichiers classiques

## Retours personnels sur l'expérience :
J'ai perdu beaucoup de temps sur la navigation dynamique, ce qui à perturbé la gestion de projet
que j'avais mise en place.
J'ai beaucoup de mal à rattraper le retard. D'ailleurs, je n'ai pas pu faire tout ce que j'aurai
souhaité et je me suis rendue compte que j'avais oublié certaines chose.

Malgré tout, je reste assez contente du travail accompli.
Je suis également très fière d'avoir réussi la fonction de navigation dynamique (malgré le soucis
relevé plus haut).



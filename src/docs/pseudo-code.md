let# Algo

## Navigation

### Besoins
#### Navigation dans la page index
- selectionner toutes les sections
- cacher les sections
- afficher la section voulue
    - récupérer le lien de la section 
#### Navigation depuis les pages indépendantes
- Utiliser le même principe en incluant le fait que la page est externe
    - aller à l'ancre sur la page index

### Pseudo-code
```
variables:
sections <- toutes les sections
url <- lien de section
target <- section à afficher

sections = caché
SI 
    url = target
ALORS
    target = afficher
SINON SI
    url != target
ALORS
    url = caché 
FINSI
```

## Vérification de l'email
### Besoins
- récupérer la saisie utilisateur
- déterminer les caractères voulus pour la saisie
- vérifier les caractère de la saisie
- comparer les caractères voulus et ceux saisis
- retourner une réponse positive ou négative

### Pseudo-code
 ```
variables:
email <- saisie utilisateur
voulus <- caractères éxigés

ECRIRE entrer une adresse email
LIRE email
SI 		email = voulus 
	ALORS
		ECRIRE Email valide
    SINON
        ECRIRE Email invalide
FIN SI
 ```

## Vérification nom et prénom

### Besoins
- récuprer la saisie utilisateur
- déterminer les caractères voulus pour la saisie
- vérifier les caractère de la saisie
- comparer les caractères voulus et ceux saisis
- déterminer le nombre de caractère maximum voulus
- retourner un message d'erreur si champ vide

### Pseudo-code
```
variables:
nom <- saisie utilisateur
voulus <- caractères exigés
nb <- nombre de caractères saisis
max bn <- nombre maximun de caractères

ECRIRE entrez votre nom
LIRE nom
SI  nb = 0
    ALORS
        ECRIRE ce champ ne peut être vide
    SINON SI
        nom > max nb
        ECRIRE votre nom est trop long
    SINON SI
        nom != voulus
            ECRIRE veuillez n'entrer que des lettres
    SINON
        nom = voulus
        ALORS
            ECRIRE champ rempli correctement
FINSI
```
**le pseudo code peut être reproduit pour le prénom**
 -> les 3 fonctions ont été fusionnées en JS
 

##  Apparition de la modale

### Besoins
- récuprer le résultat du controle du formulaire
- ajouter un ecouteur d'évènement sur le bouton 

### Pseudo-code
```
variables:
vérif <- fonction de contrôle du formulaire

SI  vérif = vrai
    ALORS
        ouverture de la modale de confirmation
FINSI
```








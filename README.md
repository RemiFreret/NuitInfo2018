# NuitInfo2018
Git pour la nuit de l'Info 2018

## Dépendence
NodeJS & npm  
mysql

## Installation
A la racine du répertoire
`npm install`

### Base de donnéess
Vous aurez besoin d'une base de données *"nuitinfo"* avec un utilisateur qui à les droits dessus  
Dans mysql (changez les champs nécéssaires):  
`CREATE DATABASE database;`  
`GRANT ALL PRIVILEGES ON database.* TO 'username'@'localhost' IDENTIFIED BY 'password';`

Les configurations par défaut sont pour l'instant dans le fichier **models/index.js**  
Vous pouvez les changer sur votre environnement si ça vous fait plaisir  
(Si vous voulez vous pouvez aussi changer mysql pour autre chose, il suffit de mettre les bons paramétrages, voir la doc de Sequelize)  

## Utilisation
Une fois que vous avez installé la db et l'appli, il suffit de lancer l'application :  
`npm start` ou `node app.js`  
Et d'aller voir (en local) [ICI](https://localhost:3000) et [LA](https://localhost:3000/module002)  

## Production
Le serveur de production est dispo à l'adresse suivante **51.75.89.139**  
Vous pouvez le voir [ICI](https://51.75.89.139:3000) et [LA](https://51.75.89.139:3000/module002) aussi  
Tous ce que ça fais pour l'instant c'est :  
- sur la première page un message tout pouri
- sur la seconde, une liste de TOTO.A chaque fois que vous charger la page, elle crée un user TOTO et affiche tout les users ...

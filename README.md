# NuitInfo2018
Git pour la nuit de l'Info 2018

# Vous aurez besoin de
NodeJS & npm  
mysql

# Installation
Une fois le repertoire cloner  
`npm install`

## Base de donnée
Vous aure besoin d'une base de donnée *"nuitinfo"* avec un utilisateur qui à les droits dessus  
Dans mysql :  
`CREATE DATABASE database;`  
`GRANT ALL PRIVILEGES ON database.* TO 'username'@'localhost' IDENTIFIED BY 'password';`

Les configuration par défault sont pour l'instant dans le fichier **models/index.js**  
Vous pouvez les changer sur votre envirronement si ça vous fait plaisir  
(Si vous voulez vous pouvez aussi changer mysql pour autre chose, il suffit de mettre les bon paramétrage, voir Sequelize)  

# Utilisation :
Une fois que vous aurez installer il suffit de lancer l'application :  
`npm start` ou `node app.js`  
Et d'aller voir [ICI](https://localhost:3000) et [LA](https://localhost:3000/module002)  

# Production
Le serveur de production est dispo à l'adresse suivante **51.75.89.139**  
Vous pouvez allez voir [ICI](https://51.75.89.139:3000) et [LA](https://51.75.89.139:3000/module002) aussi  
Tous ce que ça fais pour l'instant c'est :  
- sur la première page un message tout pouri
- sur la seconde, une liste de TOTO car a chaque fois que vous la charger, elle créer un user TOTO et affiche tout les users ...

# Test technique React - ekWateur

Bienvenue à toi cher.e candidat.e.
Tu trouveras ci-dessous les informations nécessaires pour te lancer dans ce test technique.
Si certaines parties de l’exercice ne te paraissent pas claires ou que tu as des questions, nous sommes là pour y
répondre. Nous t’encourageons même à les poser plutôt que de rester bloqué.e et de ne pas être sûr.e de ce qui t’est
demandé.

__Important__ : Tu as trois jours pour réaliser ce projet perso. Si tu as des empêchements qui ne te permettent pas de
suffisamment avancer, n’hésite pas à nous en faire part, nous adapterons le timing :)

## Objectif

L'objectif de cet exercice est de créer une application d’affichage de données en utilisant une API que l’on met à ta disposition. Tu devras ainsi afficher des données de consommation d’un client ekWateur. Plus d’informations sont regroupées ci-dessous.

## Instructions

1. Clone ce repository
2. Crée une branche avec tes noms et prenoms (date_du_jour/NOM_PRENOM)
3. Crée un service pour fetcher les données de consommation d’un utilisateur depuis l’API avec fetch (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) ou autre

   Les routes suivantes sont à ta disposition :

- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/ (permet de récupérer les POD disponibles et leur id)
- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/1/gas (permet de récupérer les données d'un POD en fonction de son id et de son énergie)
- https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/2/electricity (permet de récupérer les données d'un POD en fonction de son id et de son énergie)

4. Crée une page pour afficher ces données dans un tableau simple. Il faudra permettre à l’utilisateur d’afficher soit ses données de consommation de gaz, soit d’électricité. Tu peux afficher les informations qui te semblent pertinentes.
5. Permets à l'utilisateur de filtrer ses données par année.
6. Stylise ce tableau. Tu peux t’inspirer de notre site ekwateur.fr pour ce qui est des couleurs, des ombres, et du style graphique en général.
7. __Bonus__ - Tu peux au choix : 
    - Permettre à l'utilisateur de trier ses données par date ou index de consomation
    - Afficher dans le tableau l'évolution en pourcentage de la consommation mensuelle par rapport au mois précédent (pour l'électricité, on prendra la somme `indexHigh + indexLow`)

## Ce que l'on attend de toi

Il n’est pas indispensable de réaliser toutes ces étapes. Un code clair, lisible, testé, une bonne documentation sont préférables à un exercice fini mais moins rigoureux.

__Points d'attention supplémentaires :__ 
- Le package manager utilisé ici est yarn et non pas npm
- Le client doit être en mesure de voir son tableau sur desktop et sur mobile
- Toute autre feature non demandée (de type graphique par ex) et qui apporte un plus à l'utilisateur est bien vue

**Et bien sûr, pense à push régulièrement tes modifications sur ta branche.**

Bon courage

## Annexe
- Meter : il s'agit du compteur. Dans notre test, il y a donc 2 compteurs, un pour l'electricité et un autre pour le gaz.
- POD (point of delivery) : équivalent d'un PDL (point de livraison) et permet d'identifier un compteur
- Index : série de chiffres que tu peux retrouver sur ton compteur d'électricité et de gaz. L'index se lit en kWh (Kilowattheure) et permet de mesurer votre consommation d'énergie en indiquant avec précision combien de kWh ont été consommés à date. 
- Heures pleines et heures creuses : Pour l'électricité, il est possible de choisir entre 2 plages tarifaires, à savoir, un tarif en "heures pleines et heures creuses" et un tarif unique qu'importe l'heure. Le gaz ne permet pas de choisir sa plage.
- IndexHigh : il s'agit de l'index pour les heures pleines (électricité et gaz)
- IndexLow : il s'agit de l'index pour les heures creuses (électricité seulement).

----------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn`

To install all dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

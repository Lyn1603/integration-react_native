# Mon intégration React Native

Ce README vous guidera à travers l'intégration de React Native dans votre projet. Voici les étapes que j'ai suivies pour configurer l'environnement, installer les dépendances nécessaires et démarrer un exemple.

## Configuration de mon environnement

Avant de commencer l'intégration de React Native, j'ai configuré mon environnement de développement en suivant ces étapes :

1. J'ai installé Node.js en téléchargeant la dernière version à partir du site officiel de Node.js (https://nodejs.org).

2. Pour le développement d'applications React Native pour Android, j'ai installé Java Development Kit (JDK), en m'assurant de télécharger et d'installer la version appropriée pour mon système d'exploitation.

3. J'ai également installé Android Studio, l'IDE recommandé pour le développement d'applications Android, en le téléchargeant à partir du site officiel d'Android Studio (https://developer.android.com/studio) et en suivant les instructions d'installation.

4. J'ai configuré les variables d'environnement pour Node.js, le JDK et Android Studio, en m'assurant que les chemins d'accès aux exécutables étaient correctement définis.

## Installation des dépendances

Une fois mon environnement de développement configuré, j'ai installé les dépendances nécessaires pour mon projet React Native en suivant ces étapes :

1. J'ai installé React Native CLI en exécutant la commande suivante dans ma ligne de commande :

   ```
   npm install -g react-native-cli
   ```

2. Pour créer un nouveau projet React Native, j'ai utilisé la commande suivante :

   ```
   npx react-native init MonProjetReactNative
   ```

3. Je me suis rendu dans le répertoire du projet que je venais de créer en utilisant la commande :

   ```
   cd MonProjetReactNative
   ```

4. J'ai installé les dépendances du projet React Native en exécutant la commande :

   ```
   npm install
   ```

## Exemple de démarrage

Maintenant que j'ai configuré mon environnement et installé les dépendances, j'ai pu démarrer mon projet React Native en suivant ces étapes :

1. J'ai démarré un émulateur Android ou connecté un appareil Android à mon ordinateur.

2. Pour lancer mon application React Native, j'ai utilisé la commande suivante :

   ```
   npx react-native run-android
   ```

3. J'ai attendu que le processus de compilation se termine. Une fois terminé, mon application s'est automatiquement lancée sur l'émulateur ou l'appareil connecté.

Et voilà ! J'ai réussi à intégrer React Native dans mon projet. Je suis maintenant prêt(e) à développer mon application.

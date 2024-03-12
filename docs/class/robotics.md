# Cours de Robotique-Vision

## Prérequis

- Algèbre linéaire : calcul matriciel, changements de repères.
- Analyse : intégration, dérivation.
- Mécanique : mécanique du point, cinématique.
- Programmation : Python.
- Anglais.

## Compétences

- Utilisation de RoboDK pour la simulation de robots, de cameras et de leurs environnements.
- Programmation Python avec l'API RoboDK et la bibliothèque OpenCV pour le traitement d'images.
- Acquisition des bases de l'asservissement visuel.
- Lecture d'articles de recherches en anglais.


## Sujet
L'objectif du cours est d'implémenter, grâce au logiciel RoboDK et de son API Python, un algorithme d'asservissement visuel permettant de piloter un robot six axes equipé d'une caméra. L'algorithme devra prendre en entrée l'image courante renvoyée par la caméra et une image référence. L'algorithme devra permettre au robot d'atteindre une position qui annule la différence entre l'image courante et l'image cible.

La première étape du projet est d'implémenter un environnement sous RoboDK, contenant un robot six axes, une table, une caméra attachée au robot et des objets à filmer, afin de tester confortablement l'algorithme d'asservissement visuel. Ci-dessous un exemple d'environnement RoboDK à implémenter afin de tester l'algorithme d'asservissement visuel :

<img src="images/rdk_env.png" alt="drawing" width="500"/>

L'algorithme d'asservissement visuel se basera sur l'extraction de features dans l'image courante et l'image cible. A gauche, un exemple d'image prise par la caméra en position initiale, à droite, un exemple d'image prise par la cameré dans la position cible :

<img src="images/init.png" alt="drawing" width="350" style = "margin-right: 20px;"/><img src="images/target.png" alt="drawing" width="350"/>

En comparent les informations extraites, on peut calculer une vitesse pour la caméra. La figure suivante est une capture de l'image courante de la camera prise pendant l'execution de l'algorithme, les lignes rouges représentent l'erreur entre les features extraites de l'image courante et les features extraites dans l'image cible :

<img src="images/error.png" alt="drawing" width="500"/>

## Ressources

- [Visual servo control, Part I: Basic approaches](https://inria.hal.science/inria-00350283/document)
- [RoboDK API Examples](https://www.robodk.com/doc/en/PythonAPI/examples.html)
- [Guide des stages](https://moodle-amiens.unilasalle.fr/course/view.php?id=322)

## Livrables

- ### Fichiers utilisés pour le développement : 
    - Projet RoboDK (.rdk)
    - Image Cible (.jpg/.png)

- ### Rapport :
    - Page de garde
    - Table des matières
    - Table des figures
    - Introduction : contexte, présentation du sujet, plan du rapport
    - Corps : objectifs détaillés, outils utilisés, méthodologies, travail réalisés, explications des éléments techniques et scientifiques, moyens mis à disposition, difficultés rencontrées et solutions
    - Conclusion : résumé du corps, commentaire sur le résultats, comparaison avec les objectifs fixés, perspectives et potentiel travaux futurs.
    - References : ressources (universitaires, librairies, tutoriels, cours, etc.) utilisés dans le projet.
    - Annexes : documentation pertinente mais non indispensable à la lecture du rapport (documentation technique trop lourde, developpement mathématique, etc.)
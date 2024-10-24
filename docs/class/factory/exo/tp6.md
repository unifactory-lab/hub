# TP 6 : Simulation de ligne de production

![!](./images/tp5/logiciel-implantation-3D.png)

## Objectifs
A partir des bibliotèques de composants, réaliser l'assemblage et la simulation d'un robot puis l'implantation d'une ligne de production. À l'aide du séquenceur, réaliser l'animation de la ligne.

- [x] Importer une géométrie
- [x] Assembler et simuler la cinématique d'un robot
- [x] Implanter une chaîne de production robotisée
- [x] Programmer les séquences d'animation

## Matériel et logiciels nécessaires

- PC équipé avec : Siemens NX ( + Line Designer & Mecatronics concept designer)

## Support pédagogique

Le département PAUC d'UniLaSalle Amiens est en pleine rénovation. Vous participerez à la conception de la nouvelle ligne de production en réalisant le jumeau numérique de la nouvelle usine robotisée.

## Téléchargements

- [Robot Scara](./files/tp6/scara.sdlprt.zip)
- [Librarie de composant](./files/tp6/scara.sdlprt.zip)
- [ZIP du projet](./files/tp6/tp6.zip)

## Travail à réaliser :

- [ ] Modéliser un rail de convoyeur droit
- [ ] Paramétrer un composant réutilisable
- [ ] Créer un composant réutilisable de rail courbe
- [ ] Réaliser une implantation à l'aide de la bibliothèque de composants
- [ ] Réaliser l'animation de la chaîne de production

### 1. Création d'un nouveau projet

Pour commencer, créez un nouveau dossier sur la session. Renommez le dossier `tp6.scara.Prénom.NOM` (ex : `tp6.scara.Jules.TOPART`).
Vous pouvez aussi télécharger le template de projet ZIP disponible dans les téléchargements.

Nous allons commencer par importer un robot depuis une bibliotèque en ligne. Il existe de nombreux Robot en 3D accessible sur des site comme [GrabCAD](https://grabcad.com) ou [Thingiverse](https://thingiverse.com). N'hésitez pas à réaliser le TP avec le robot de votre choix. Si vous n'en trouvez pas, vous pouvez utiliser le robot disponible dans les téléchargements.

Après avoir créé le dossier, lancez __Siemens mechatronics concept designer__.

!!! Warning
    Si NX ne se lance pas et affiche un message d'erreur lié à un problème de licence, suivez ce [tutoriel](../documentation/software/nx/nx-licence.md)

Pour commencer, comme dans le TP1, créez une nouvel assemblage et nommer le `scara.asm`. Pensez à sauvegarder ce fichier dans votre dossier de travail. Créer ensuite un dossier portant le même nom dans le dossier de travail, nous y placeront les composants de l'assemblage.

![](./images/tp6/scara.asm.jpg)

Nous allons maintenant importer les différentes partie du robot.
Malheurersement, les fichiers disponibles gratuitements sur les bilbiotèques sont raremenent au bon format. Nous allons donc devoir les convertir.

Après avoir choisi un robot (Un robot est disponible dans la rubrique téléchargement), Télécharger le ZIP et décompresser son contenu dans votre dossier.
Vous y trouverez toutes les pièces du robot.

Afin d'ouvrir les pièces du robot, utiliser l'outil __Ouvrir__ dans l'onglet __Fichier__.

![](./images/tp6/open.jpg)

Ouvrez le fichier `base_sldptr` puis dans l'onglet __Fichier__,  cliquez sur __Enrigistrer sous__ et sauvegarder le fichier sous le nom de `base.prt` dans votre dossier de travail.

![](./images/tp6/import.jpg)

Ensuite, dans votre assemblage, ajouter un nouveau composant et selectionnez le fichier `base.prt`.

![](./images/tp6/import-part-toolbar.jpg)

Importez la base et remplacer la à l'origine du repère.

![](./images/tp6/base.jpg)

Répétez pour tout les fichiers du robot.


### 2. Réaliser l'assemblage du robot sous MCD

Nous allons maintenant assembler et simuler la cinématique du robot ci dessous : 

![](./images/tp6/scara.jpg)

Pour faciliter l'assemblage, commencer par réaliser un assemblage dans l'application __Modélisation__. Cela permettra de positioner les pièces. Cette assemblage ne servira pas pour la simulation.

![](./images/tp6/scara.exploded.jpg)

Après avoir assembler le robot, nous allons créer les sous ensembles mobile de la simulation.
Votre robot contiendra autant de sous ensemble que d'axe.

![](./images/tp6/scara.assembled.jpg)

Ici, notre robot possède 2 axes rotatifs et 1 axes linéaire. Toutefois, nous avons aussi une pince composé de 2 corps mobiles.
Nous avons donc 6 corps rigide au total en comptant la base fixe.

Dans l'application __Mecatronics concept designer__, comme dans le TP2, créez les __corps rigide__ en selectionnant les composants dans le navigateurs d'assemblage.

Commencez par selectionner la base, le chassis, l'axe A et le cache de l'axe.

![](./images/tp6/body.base.jpg)

Selectionnez ensuite le bras A, l'axe B, et les deux caches.

![](./images/tp6/body.bras.a.jpg)

Selectionnez le bras B

![](./images/tp6/body.bras.b.jpg)

Selection l'axe C

![](./images/tp6/body.axe.c.jpg)

Puis créer un corps rigide pour chacune des deux mors de la pince.

![](./images/tp6/body.gripper.jpg)

Créer ensuite les articulations comme dans le TP2 afin d'obtenir la cinématique suivante : 

![](./images/tp6/scara.physics.gif)

### 3. Implantation

A l'aide de la librarie disponible dans les téléchargements, créer une nouvelle ligne de production (voir TP5) puis, importer les convoyeur afin de réaliser cette implantation :

![](./images/tp6/factory.jpg)

Pour réaliser l'implantation, vous utiliserez les convoyeurs de la librarie disponible dans les téléchargements. Vous trouverez le support de robot dans la bibliothèque standard de composant.

Il vous faudra également modéliser deux boites au dimmensions suivantes : 

![](./images/tp6/big.box.sketch.jpg)

![](./images/tp6/big.box.extrude.jpg)

![](./images/tp6/small.box.sketch.jpg)

![](./images/tp6/small.box.extrude.jpg)

### 4. Simulation

Pour commencer l'animation, retourner dans l'application __Mecatronics concept designer__. Créer un nouveau corps rigides contenant une boîtes nouvellement créée.

![](./images/tp6/big.box.body.jpg)

Créer ensuite le corps de collision en selectionant trois des face exterieur de la boîte.

![](./images/tp6/big.box.collider.jpg)

Répétez pour l'autre boîte.
Puis créer un corps de collision en selectionant la surface des deux premier convoyeur.

![](./images/tp6/conveyor.input.collider.jpg)

Nous allons maintenant créer le convoyeur qui menera les boîtes jusqu'au robot.

![](./images/tp6/transport.menu.jpg)

Créer un nouveau convoyeur en selectionant la première surface du convoyeur.
Puisque nous avons déjà créer le corps de collision, NX liera automatiquement la surface de transport et le corps de collision.

Si vous jouer la simulation, vous devriez constater que la boîte tombe sur le convoyeur et gagne de la vitesse jusqu'à tomber à l'autre bout.

Afin que d'autre boîte soit créer automatiquement, nous allons créer une source d'objet. Pour cela, dans la barre d'outil, au dessous de l'outil __corps rigide__.

![](./images/tp6/source.menu.jpg)

Créer ensuite la source d'objet en selection le corps rigide et le corps de collision dans le navigateur sur la gauche.

![](./images/tp6/big.box.source.jpg)
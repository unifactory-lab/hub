## 3.3. Fabrication numérique
La fabrication numérique n'est pas une innovation en soit puisqu'elle est présente dans la plupart des industries aujourd'hui.
La première machine de fraisage numérique fut élaborée en 1952 au MIT. 

![](https://www.sansmachining.com/wp-content/uploads/2021/08/history-of-cnc-machining.jpg)

Ce qui est plus récent en revanche, c'est son intégration dans le processus de conception et de prototypage.
Auparavant, les machines de fabrication numériques, étaient programmables. Un opérateur écrivait un code machine (souvent en __GCode__) de façon à produire une pièce commandée. À chaque nouvelle pièce, il fallait réécrire le programme.
Lorsque le programme était validé, il pouvait être lancé un grand nombre de fois pour réaliser des pièces identiques jusqu'au prochain changement de gamme.

<iframe width="755" height="566" src="https://www.youtube.com/embed/ThiGf_603JM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

??? info "La syntaxe GCode"
    
    | GCode | Operation              | Description                                                                                                                    |
    | ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
    | G00   | Mouvements rapides     | ![](https://i2.wp.com/makezine.com/wp-content/uploads/2016/10/gcodeA-620x480.png?resize=620%2C480&is-pending-load=1#038;ssl=1) |
    | G01   | Mouvements contrôlés   | ![](https://i2.wp.com/makezine.com/wp-content/uploads/2016/10/gcodeb-620x433.png?resize=620%2C433&is-pending-load=1#038;ssl=1) |
    | G20   | Unité impérial (in)    | Passage au système d'unités impériale (en Pouces)                                                                              |
    | G21   | Unité métrique (mm)    | Passage au système d'unités métrique (en Millimètre)                                                                           |
    | G28   | Retour origine machine | Déplacement jusqu'à la position d'origine machine (Il est possible de définir un point de passage intermidiaire).              |
    | G90   | Mode absolu            | Déplacemet absolu (La commande `G0 X10` enverra la machine au coordonnée X = 10mm quelque soit sa position actuelle )          |
    | G91   | Mode relatif           | Déplacement relatif (La commande `G0 X10` enverra la machine 10 unités plus loin que sa position actuelle)                     |

La grande différence aujourd'hui, c'est qu'il n'y a plus véritablement besoin d'écrire les programmes manuellement. Depuis grâce aux avancées informatiques en matière de modélisation et d'algorithme, les programmes d'usinage sont générer presque automatiquement. En usinage, on va utiliser les logiciels pour définir les stratégies d'usinage et le GCode sera généré automatiquement.
L'opérateur se contente désormais de définir les grandes étapes de l'usinage. (Fraisage, Perçage, Tournage, Poche, Surfaçage ... )

Cette intégration permet notamment d'accélérer les cycles de conception, il est désormais possible de réaliser des prototypes de façon beaucoup plus rapide qu'auparavant. Le temps de changement de gamme est également réduit, permettant aux industriels d'être plus réactifs aux variations du marché.

On distingue principalement 2 types de machine de fabrication à commande numérique.
On oppose la __fabrication soustractive__ à la __fabrication additive__.

### Fabrication soustractive
La fabrication soustractive regroupe toutes les méthodes de fabrication où l'on tente d'obtenir une pièce en enlevant de la matière à un bloc de matière dit __brut__.
Cette soustraction de matière peut être réalisée de différentes façons. Cela dépend de la pièce à réaliser et du matériaux qui la constitue.
Pour réaliser des pièces en métal, on va, le plus souvent, utiliser un outil tranchant plus dur que le matériau brut. On va alors retirer des copeaux de matières et ainsi sculpter la pièce final dans le brut.

![Usinage](https://www.3dnatives.com/wp-content/uploads/cnc-machining.jpg)

Il est possible de tirer profit des propriétés physiques d'un matériau pour le transformer. On peut enlever de la matière en utilisant un processus chimique ou en le faisant fondre par exemple.

[En savoir plus](https://www.hubs.com/knowledge-base/cnc-machining-manufacturing-technology-explained/){.md-button}

La fabrication soustractive est bien que très largement répandue dans l'industrie, ne permet pas de fabriquer toutes les géométries de pièces. En effet, pour enlever de la matière dans un volume, il faut que l'outil qui enlèvera la matière puisse atteindre les zones à évider. Certaines pièces sont donc impossibles à produire en fabrication soustractive.

Il existe essentiellement deux types de fabrication soustractive, le Fraisage et le tournage. Certaines machines combinent souvent ces deux fonctions afin d'offrir plus de liberté au concepteur.
Si la plupart des pièces 3D peuvent être réalisé avec 3 axes motorisés, les centres d'usinage en compte souvent 5. (3 axes linéaires +2 axes d'orientation de l'outil)

### Fabrication additive

La fabrication additive se caractérise par le fait de créer une pièce à partir de rien, c'est-à-dire en ajoutant de la matière là où il n'y en a pas.
La méthode les plus connue consiste à fondre un polymère plastique pour le rendre liquide puis de le déposer couche par couche afin de créer un volume.

Ce procédé de fabrication est appelé FDM (Fused deposition modeling)

![](https://images.theconversation.com/files/329575/original/file-20200421-82666-1kto1ak.jpg?ixlib=rb-1.1.0&rect=0%2C556%2C5991%2C2991&q=45&auto=format&w=668&h=324&fit=crop)

C'est aujourd'hui le plus répandu sur le marché grand public. Pourtant, ce n'est pas la technologie la plus utilisée dans l'industrie.
Historiquement l'impression 3D est née le 16 juillet __1984__ alors que le 1er brevet décrivant le procédé était déposé. Inventé par Jean-Claude André et Olivier de Witte pour l'entreprise CILAS ALCATEL. Malgré tout, c'est l'Américain Chuck Hull qui déposera le brevet sur la technique de stéréolithographie aussi appelé __SLA__.

[En savoir plus](add-man.md){.md-button}

### Moulage

<iframe width="760" height="437" src="https://www.youtube.com/embed/WHwTHarf8Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[En savoir plus](https://www.hubs.com/guides/injection-molding/#the-basics){.md-button}
# TD2 : Estimation du volume d'eau perdu

## Contexte

Un réservoir d'eau subit une fuite. Le débit de la fuite (quantité d'eau perdue par unité de temps) est mesuré à intervalles réguliers. L'objectif est d'estimer le volume total d'eau perdu sur une période donnée en utilisant l'intégrale de Riemann.

<script>
  var startpauseCb;
  var resetCb;

  function startpause(){
    startpauseCb();
  }

  function reset(){
    resetCb();
  }
</script>

<div id="sketch-holder-td2">
    <button class="md-button" onclick="startpause()">Start simulation</button>
    <button class="md-button" onclick="reset()">Reset simulation</button>
</div>

{% import 'theme/p5macro.html' as macro %}
{{macro.sketch("sketch1", "Leaking Tank Simulation","

  var run = false;
  var mheight = 300; // Hauteur initiale de l'eau dans le réservoir
  var mwidth = 200;  // Largeur constante du réservoir
  var leakRate = 0.01; // Taux de fuite (peut être ajusté selon le scénario)

  startpauseCb = function() {
    run = !run;
  }

  resetCb = function() {
    p.setup();
  }

  p.setup = function(){
    p.createCanvas(400, 400).style('display', 'block');
    p.textFont('Poppins');
    p.clear();
    p.background(255, 0);
    run = false;
    mheight = 300; // Hauteur initiale de l'eau dans le réservoir
    mwidth = 200;  // Largeur constante du réservoir
    leakRate = 0.01; // Taux de fuite (peut être ajusté selon le scénario)
  }

  p.draw = function(){
    p.background(255);
    if(run){
        // Simulation de la fuite en diminuant la hauteur du rectangle
        mheight -= leakRate*mheight*0.1;

        // Empêcher la hauteur de devenir négative
        mheight = p.max(mheight, 0);
        if(mheight <= 0){
          run = false;
        }
    }

    p.noStroke();
    p.fill(80,150,255);

    var x1 = (400 - mwidth) / 2;
    var y1 = 400 - mheight - 20;
    var x2 = x1;
    var y2 = y1 + mheight;
    var x3 = x1 + mwidth;
    var y3 = y1 + mheight;
    var x4 = x1 + mwidth;
    var y4 = y1;

    //p.rect(x1, y1, mwidth, mheight);

    p.quad(x1,y1,x2,y2,x3,y3,x4,y4);

    p.noFill();
    p.stroke(0);
    p.rect((400 - mwidth) / 2, 400 - 320 - 20, mwidth, 320, 10, 10, 0, 0);
    if(run && mheight > 1){
      p.fill(80,150,255);
      p.noStroke();
      radius = mheight/3;
      p.arc(mwidth+(400 - mwidth - 2) / 2, 400+20, radius + radius*p.noise(0.005 * p.frameCount), 80 + p.min(mheight*2, 10), 3*3.1415926/2, 0);
      p.fill(255);
      p.arc(mwidth+(400 - mwidth - 2) / 2, 400+20, (radius/2) + radius*p.noise(0.005 * p.frameCount), 80, 3*3.1415926/2, 0);
    }
  } 

")}}


### Objectifs

- Comprendre et appliquer l'intégrale de Riemann pour estimer le volume d'eau perdu.
- Analyser l'impact de la taille de l'intervalle sur la précision de l'estimation.

### Données

- Le débit de la fuite est mesuré toutes les heures sur une période de 24 heures.
- Les mesures de débit sont fournies en litres par heure (L/h).

|Heure (h)|Débit (L/h)|Heure (h)|Débit (L/h)|
|:--:|:---:|:--:|:---:|
| **0**  | 100 | **12** | 40  |
| **1**  | 95  | **13** | 35  |
| **2**  | 90  | **14** | 30  |
| **3**  | 85  | **15** | 25  |
| **4**  | 80  | **16** | 20  |
| **5**  | 75  | **17** | 15  |
| **6**  | 70  | **18** | 10  |
| **7**  | 65  | **19** | 5   |
| **8**  | 60  | **20** | 0   |
| **9**  | 55  | **21** | 0   |
| **10** | 50  | **22** | 0   |
| **11** | 45  | **23** | 0   |


### Équations Clés
#### Équation Différentielle du Débit

Supposons que le débit de la fuite \( Q(t) \) varie avec le temps en raison de facteurs tels que la pression de l'eau, qui pourrait dépendre du niveau d'eau restant dans le réservoir. Une équation différentielle simple qui pourrait modéliser cette situation est :

\[ \frac{dQ}{dt} = -\beta Q(t) \]

où \( \beta \) est un coefficient qui représente la vitesse à laquelle le débit diminue en fonction de \( Q \), possiblement due à la diminution de pression dans le réservoir à mesure que le volume d'eau diminue.

#### Formule de la Somme de Riemann

Pour calculer le volume total d'eau perdu \( V \) sur une période donnée \( T \), en utilisant le débit \( Q(t) \) mesuré à intervalles réguliers, nous appliquons la somme de Riemann :

\[ V \approx \sum_{i=1}^{n} Q(t_i) \Delta t \]

où :

- \( Q(t_i) \) est le débit mesuré à l'instant \( t_i \),
- \( \Delta t \) est l'intervalle de temps entre deux mesures consécutives,
- \( n \) est le nombre total de mesures.


### Consigne pour l'Exercice

En utilisant les données du tableau et la formule de la somme de Riemann, calculez le volume total d'eau perdu pendant les 24 heures. Cette application pratique vous permettra d'explorer comment des mesures régulières du débit peuvent être utilisées avec l'intégration numérique pour estimer le volume d'eau perdu à cause d'une fuite dans un contexte réel.

#### Exercice

1. **Analyse des Données** :
   - Examiner les mesures de débit fournies pour la période de 24 heures.

2. **Application de l'Intégrale de Riemann** :
   - Calculer le volume d'eau perdu en utilisant la méthode des sommes de Riemann. Considérer à la fois les sommes à gauche et à droite pour l'intégration et discuter des différences dans les résultats obtenus.

3. **Impact de la Taille de l'Intervalle** :
   - Discuter comment la modification de la taille de l'intervalle (par exemple, en prenant des mesures toutes les 30 minutes au lieu de chaque heure) pourrait affecter la précision de l'estimation du volume d'eau perdu.

#### Questions pour Approfondissement

- Comment l'introduction de mesures plus fréquentes du débit affecte-t-elle l'erreur d'estimation ?
- Si le débit de la fuite changeait de manière non linéaire au fil du temps, quelle méthode d'intégration serait la plus appropriée pour estimer le volume perdu et pourquoi ?

#### Conclusion

Cette tâche illustre l'application pratique des méthodes numériques et met en évidence l'importance de la précision des données et du choix de la méthode d'intégration dans l'analyse des phénomènes réels. 

---

Cet exercice encourage non seulement à pratiquer l'intégration numérique mais aussi à réfléchir de manière critique sur la collecte de données et son impact sur la résolution de problèmes dans des situations concrètes.
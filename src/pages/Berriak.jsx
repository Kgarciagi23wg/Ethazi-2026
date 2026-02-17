import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageContext";

const noticiasMock = [
  {
    id: 1,
    titulo: {
      eu: "Vitor Reisez ez zen bosgarren txartel horia izan: akta arbitralak Witseli egozten dio",
      es: "Vitor Reis no vio la quinta amarilla: el acta arbitral se la atribuye a Witsel",
      en: "Vitor Reis did not receive the fifth yellow card: the referee’s report assigns it to Witsel"
    },
    descripcionCorta: {
      eu: "Girona Vitor Reisez izango du hurrengo ligako neurketan.",
      es: "El Girona podrá contar con Vitor Reis en el próximo compromiso liguero.",
      en: "Girona will be able to count on Vitor Reis for the next league match."
    },
    contenido: [
      {
        texto: {
          eu: "Gironak azkenean Vitor Reis izango du hurrengo ligako neurketarako, Bartzelonaren aurkako partidaren akta arbitralak azken minutuetan erakutsitako txartel horiaren egiletza argitu ondoren.",
          es: "El Girona podrá contar finalmente con Vitor Reis para el próximo compromiso liguero después de que el acta arbitral del encuentro ante el Barcelona aclarase la autoría de la amonestación mostrada en los minutos finales.",
          en: "Girona will finally have Vitor Reis available for the next league fixture after the referee’s report from the match against Barcelona clarified the authorship of the yellow card shown in the final minutes."
        }
      },
      {
        texto: {
          eu: "Hasieran telebistan interpretatu zen brasildarrak denboraldiko bosgarren txartel horia ikusi zuela, baina César Soto Gradok akta arbitralan jaso zuen 90. minutuko txartela Axel Witseli zegokiola.",
          es: "Aunque inicialmente se interpretó desde la TV que el central brasileño había visto la quinta tarjeta amarilla de la temporada, el colegiado César Soto Grado reflejó en el acta que la amonestación del minuto 90 correspondió a Axel Witsel.",
          en: "Although it was initially interpreted on TV that the Brazilian centre-back had received his fifth yellow card of the season, referee César Soto Grado stated in the official report that the booking in the 90th minute corresponded to Axel Witsel."
        }
      },
      {
        texto: {
          eu: "Ondorioz, brasildarra zigorrik gabe geratzen da eta prest egongo da Mendizorrotzara egingo den bisitarako datorren astelehenean, otsailaren 23an, 21:00etan, LaLiga EA Sports-eko 25. jardunaldiari dagokion neurketan.",
          es: "Por lo tanto, el defensor brasileño queda libre de sanción y podrá estar disponible para la visita a Mendizorroza el lunes 23 de febrero a las 21:00 horas, correspondiente a la jornada 25 de LaLiga EA Sports.",
          en: "As a result, the Brazilian defender avoids suspension and will be available for the visit to Mendizorroza on Monday, February 23 at 21:00, corresponding to matchday 25 of LaLiga EA Sports."
        }
      }
    ],
    imagenFinal: {
      src: "/T.Laliga/girona.png",
      alt: {
        eu: "Ligako partida",
        es: "Partido de liga",
        en: "League match"
      }
    },
    fecha: "2026-02-17"
  },
  {
    id: 2,
    titulo: {
      eu: "Calebek kredituari azkena ematen dio",
      es: "A Calebe se le agota el crédito",
      en: "Calebe is running out of credit"
    },
    descripcionCorta: {
      eu: "Brasildarraren errendimendua behera doa eta bere egoera zalantzan dago.",
      es: "El brasileño atraviesa un bajón y su situación empieza a generar debate.",
      en: "The Brazilian is going through a dip in form and his situation is under debate."
    },
    contenido: [
      {
        texto: {
          eu: "Calebek bere lehen beherakada larria bizi du Gasteizera iritsi zenetik. Fortalezatik 2026ko ekainera arte erosteko aukerarekin utzita iritsi zen, jokoaren erritmoa markatzeko eta azken pasea emateko gaitasunarekin.",
          es: "Calebe atraviesa su primer bache serio desde que aterrizó en Vitoria. El brasileño, cedido por el Fortaleza hasta junio de 2026 con opción de compra, llegó como mediapunta de pausa y último pase.",
          en: "Calebe is going through his first serious dip in form since arriving in Vitoria. The Brazilian, on loan from Fortaleza until June 2026 with a purchase option, arrived as an attacking midfielder known for controlling the tempo and providing the final pass."
        }
      },
      {
        texto: {
          eu: "Hala ere, Eduardo Coudetek gehienbat eskuineko hegalean erabili du, taldearen zabalera mantentzeko eta defentsako ahaleginak orekatze aldera. Hasieran horrek hamaikakoan finkatzea ahalbidetu zion.",
          es: "Sin embargo, Eduardo Coudet lo ha utilizado mayoritariamente en la banda derecha para sostener la amplitud del equipo y equilibrar esfuerzos defensivos. Esa adaptación le permitió asentarse en el once en los primeros meses.",
          en: "However, Eduardo Coudet has mostly used him on the right wing to maintain the team’s width and balance defensive efforts. That adaptation initially allowed him to settle into the starting eleven."
        }
      },
      {
        texto: {
          eu: "Orain, ordea, eztabaida piztu da. Zenbaki ofentsiborik gabe (0 gol eta 0 asistentzia 18 partidatan) eta errendimendua behera eginez, bere egoera nabarmen aldatu da.",
          es: "Ahora el debate es evidente. Sin cifras ofensivas que respalden su continuidad (0 goles y 0 asistencias en 18 partidos) y con un rendimiento que ha ido perdiendo peso, su situación ha cambiado claramente.",
          en: "Now the debate has intensified. With no attacking numbers to support his continuity (0 goals and 0 assists in 18 matches) and a performance level that has gradually declined, his situation has clearly changed."
        }
      }
    ],
    imagenFinal: {
      src: "/T.Laliga/alaves.png",
      alt: {
        eu: "Ligako irudia",
        es: "Imagen de liga",
        en: "League image"
      }
    },
    fecha: "2026-02-16"
  },
  {
  id: 3,
  titulo: {
    eu: "Abqar, horma urdinaren babesgunean gehiago",
    es: "Abqar, más cemento para el muro de contención azulón",
    en: "Abqar, more reinforcement for the Azulón defensive wall"
  },
  descripcionCorta: {
    eu: "Getafeko defentsa egonkortu du Abdelkabir Abqarren sarrera berriak.",
    es: "El reciente crecimiento defensivo del Getafe se apoyó en Abdelkabir Abqar.",
    en: "Getafe’s defensive solidity has been strengthened by Abdelkabir Abqar."
  },
  contenido: [
    {
      texto: {
        eu: "Getafeko hazkundeak bere babesle fidagarrienetako bat aurkitu du Abdelkabir Abqar-en pertzepzioan, 23. eta 24. jardunaldietan izandako agerpenek José Bordalás-ek diseinatutako defentsa-egitura indartu baitute.",
        es: "El crecimiento reciente del Getafe ha encontrado uno de sus apoyos más fiables en Abdelkabir Abqar, cuya aparición en las jornadas 23 y 24 ha reforzado la estructura defensiva diseñada por José Bordalás.",
        en: "Getafe’s recent growth has found one of its most reliable supports in Abdelkabir Abqar, whose appearances in matchdays 23 and 24 reinforced the defensive structure designed by José Bordalás."
      }
    },
    {
      texto: {
        eu: "Mendizorrotzan, Deportivo Alavesen aurka, marokoar erdiko atzelariak lehen hiruhilekoaren ondoren sartu zen Mario Martín-en lesioaren ondorioz, 56 minutuz jokatu zuen eta Djené-ren posizioa aurreratzeko moldaketa taktikoan parte hartu zuen.",
        es: "En Mendizorroza, ante el Deportivo Alavés, el central marroquí ingresó pasado el primer tercio del partido tras la lesión de Mario Martín, disputando cerca de 56 minutos en un reajuste táctico que permitió adelantar la posición de Djené.",
        en: "In Mendizorroza, against Deportivo Alavés, the Moroccan centre-back came on after the first third of the match following Mario Martín’s injury, playing around 56 minutes in a tactical adjustment that allowed Djené to move forward."
      }
    },
    {
      texto: {
        eu: "Estatistiketan gehiegi nabarmendu gabe, bere sarrerak taldea egonkortu zuen une delikatu batean. Getafek defentsa-orden mantendu zuen, barruko espazioak itxi eta golik jaso gabe garaipena ziurtatu zuen, Abqarren sarrerak lasaitasuna eta presentzia fisikoa ekarriz.",
        es: "Sin excesivo protagonismo estadístico, su entrada estabilizó al equipo en un momento delicado. El Getafe sostuvo el orden defensivo, cerró espacios interiores y terminó asegurando una victoria sin encajar goles, con Abqar aportando serenidad y presencia física en los duelos.",
        en: "Without much statistical prominence, his entry stabilized the team at a delicate moment. Getafe maintained defensive order, closed interior spaces, and ultimately secured a clean-sheet victory, with Abqar providing composure and physical presence in duels."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/getafe.png",
    alt: {
      eu: "Getafeko defentsa",
      es: "Defensa del Getafe",
      en: "Getafe defense"
    }
  },
  fecha: "2026-02-15"
},
{
  id: 4,
  titulo: {
    eu: "Javi Guerra eta Guido bat egiten dute eta erdiko lerroa dinamizatzen dute",
    es: "Javi Guerra y Guido se suman a la causa y agitan la medular",
    en: "Javi Guerra and Guido join the cause and shake up the midfield"
  },
  descripcionCorta: {
    eu: "Valenciak erantzun bat aurkitu du bankutik eta erdiko lerroan soluzioa.",
    es: "El Valencia encontró respuesta desde el banquillo y en el centro del campo.",
    en: "Valencia found an answer from the bench and a solution in midfield."
  },
  contenido: [
    {
      texto: {
        eu: "Valenciak derbian hiru puntu baino gehiago aurkitu zituen. Bankutik erantzun bat aurkitu zuen eta, batez ere, partidua kontrolik gabeko egoerara doanean erdiko lerroan soluzioa.",
        es: "El Valencia encontró en el derbi algo más que tres puntos. Encontró una respuesta desde el banquillo y, sobre todo, una solución en el centro del campo cuando el partido empezaba a escaparse hacia un escenario incómodo.",
        en: "Valencia found more than just three points in the derby. They found a response from the bench and, above all, a solution in midfield when the game started to slip into an uncomfortable scenario."
      }
    },
    {
      texto: {
        eu: "Ordura arte, planak kontrola zen. Pepelu eta Ugrinic bi jokalariko pivotea osatu zuten taldeari eusteko, galtzen diren baloiak murrizteko eta Levante transizio argiak aurkitzea saihesteko.",
        es: "Hasta entonces, el plan había pasado por el control. Pepelu y Ugrinic formaron un doble pivote orientado a sostener al equipo, reducir pérdidas y evitar que el Levante encontrara transiciones claras.",
        en: "Until then, the plan revolved around control. Pepelu and Ugrinic formed a double pivot aimed at supporting the team, reducing losses, and preventing Levante from finding clear transitions."
      }
    },
    {
      texto: {
        eu: "Partidua luzez horretan mugitu zen: erritmo baxua, etenaldi gutxi eta Valencia ordenatua, baina posizioa sakonera bihurtzeko zailtasunekin.",
        es: "El encuentro se movió durante muchos minutos en ese terreno: ritmo bajo, pocas rupturas y un Valencia ordenado, pero con dificultades para transformar la posesión en profundidad.",
        en: "The match stayed in that phase for many minutes: low tempo, few breakthroughs, and an organized Valencia, but with difficulties turning possession into depth."
      }
    },
    {
      texto: {
        eu: "Aldaketa Javi Guerra eta Guido sartzean iritsi zen. Erdiko lerroak kontrol espazio soil bat izateari utzi eta bultzada puntua bihurtu zen.",
        es: "El cambio llegó con la entrada de Javi Guerra y Guido. El centro del campo dejó de ser únicamente un espacio de control para convertirse en un punto de impulso.",
        en: "The change came with the entrance of Javi Guerra and Guido. Midfield ceased to be merely a control zone and became a point of impetus."
      }
    },
    {
      texto: {
        eu: "Guido defentsako presentzia, jokoen irabazteko gaitasuna eta galtzen denean ordena ekarri zuen, taldeak metroak aurreratzea ahalbidetuz oreka galdu gabe. Bere esku-hartzea formalki diskretua izan zen, baina funtsezkoa egonkortzean.",
        es: "Guido aportó presencia defensiva, capacidad para ganar duelos y orden tras pérdida, permitiendo que el equipo adelantara metros sin perder equilibrio. Su intervención fue discreta en lo formal, pero determinante en la estabilización.",
        en: "Guido provided defensive presence, the ability to win duels, and order after losing the ball, allowing the team to advance meters without losing balance. His contribution was discreet in form, but decisive in stabilizing the team."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/valencia.png",
    alt: {
      eu: "Erdiko lerroko jokalariak",
      es: "Jugadores del centro del campo",
      en: "Midfield players"
    }
  },
  fecha: "2026-02-14"
},
{
  id: 5,
  titulo: {
    eu: "Flickek ez daki Bernal edo Bardghji aukeratu Montilivira jotzeko",
    es: "Flick duda entre Bernal o Bardghji para asaltar Montilivi",
    en: "Flick undecided between Bernal or Bardghji to attack Montilivi"
  },
  descripcionCorta: {
    eu: "FC Barcelona gaur gauean Montilivira bisitatuko du, derbi katalana jokatzeko.",
    es: "El FC Barcelona visita esta noche Montilivi para medirse al Girona en un derbi catalán.",
    en: "FC Barcelona visits Montilivi tonight to face Girona in a Catalan derby."
  },
  contenido: [
    {
      texto: {
        eu: "FC Barcelona gaur gauean Montilivira bisitatuko du (21:00) Girona aurka, Metropolitanoan jasan zuten porrotaren ondoren erreakzio beharra dagoen derbi katalana.",
        es: "El FC Barcelona visita esta noche Montilivi (21:00 horas) para medirse al Girona en un derbi catalán que llega marcado por la necesidad de reacción tras la derrota en el Metropolitano.",
        en: "FC Barcelona visits Montilivi tonight (21:00) to face Girona in a Catalan derby, coming after the need for a reaction following the defeat at the Metropolitano."
      }
    },
    {
      texto: {
        eu: "Hansi Flick hasierako hamaikakoa moldatzea aztertzen ari da, batez ere eraso-eremuan, Fermín Lópezen posizioaren arabera Marc Bernal edo Roony Bardghji sartzeko zalantza mantenduz.",
        es: "Hansi Flick valora introducir ajustes en el once, especialmente en la zona ofensiva, donde mantiene la duda entre Marc Bernal y Roony Bardghi para completar el equipo titular, dependiendo de la posición de Fermín López.",
        en: "Hansi Flick is considering adjustments to the starting eleven, especially in the attacking zone, keeping the doubt between Marc Bernal and Roony Bardghi to complete the starting lineup, depending on Fermín López’s position."
      }
    },
    {
      texto: {
        eu: "Igandeko entrenamenduek probak erakutsi zituzten, non suediarrak eragin zuzena izan zuen posible hamaikakoan.",
        es: "Los ensayos del domingo dejaron ver pruebas significativas donde el sueco tuvo incidencia directa en el posible once titular.",
        en: "Sunday’s rehearsals showed significant trials where the Swede had direct impact on the possible starting eleven."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/barcelona.png",
    alt: {
      eu: "FC Barcelona jokalariak",
      es: "Jugadores del FC Barcelona",
      en: "FC Barcelona players"
    }
  },
  fecha: "2026-02-13"
},
{
  id: 6,
  titulo: {
    eu: "Champions-aren abestiaren psikofonia Son Moix-en",
    es: "Psicofonías con el himno de Champions en Son Moix",
    en: "Psychophonies with the Champions anthem at Son Moix"
  },
  descripcionCorta: {
    eu: "Real Betisek garaipen zail bat lortu du Son Moixen eta egoera ona sendotu.",
    es: "El Real Betis salió de Son Moix con una victoria trabajada que refuerza su momento competitivo.",
    en: "Real Betis earned a hard-fought victory at Son Moix, strengthening their competitive form."
  },
  contenido: [
    {
      texto: {
        eu: "Real Betisek Son Moix utzi zuen garaipen lanekoa lortuta, bere une lehiakorra sendotuz eta goiko postuetara begiratzeko aukera emanez.",
        es: "El Real Betis salió de Son Moix con una victoria trabajada que refuerza su momento competitivo y le permite mirar hacia la zona alta con cierta legitimidad.",
        en: "Real Betis left Son Moix with a hard-earned victory, reinforcing their competitive moment and allowing them to look towards the top positions with some legitimacy."
      }
    },
    {
      texto: {
        eu: "RCD Mallorcak, aldiz, berriro bizi zuen ezinegona, akatsen margenik ez dagoenean taldeek jasaten duten sentsazioa.",
        es: "El RCD Mallorca, en cambio, volvió a convivir con esa sensación incómoda que acompaña a los equipos cuando el margen de error desaparece.",
        en: "RCD Mallorca, on the other hand, once again experienced that uncomfortable feeling that accompanies teams when the margin for error disappears."
      }
    },
    {
      texto: {
        eu: "Azken 1-2ak aurreko minutuetatik hasita bi egoera emozional desberdin erakutsi zituen.",
        es: "El 1-2 final explicó dos estados de ánimo opuestos desde el primer tramo del encuentro.",
        en: "The final 1-2 score reflected two opposing states of mind from the early stages of the match."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/betis.png",
    alt: {
      eu: "Real Betis jokalariak",
      es: "Jugadores del Real Betis",
      en: "Real Betis players"
    }
  },
  fecha: "2026-02-12"
},
{
  id: 7,
  titulo: {
    eu: "Rodrigo Mendosak bosgarren txartela ikusi zuen eta Espanyolen bisita galtuko du",
    es: "Rodrigo Mendoza vio la quinta tarjeta y se perderá la visita del Espanyol",
    en: "Rodrigo Mendoza received his fifth yellow card and will miss Espanyol visit"
  },
  descripcionCorta: {
    eu: "Atlético de Madriden erdilaria hurrengo jardunaldian ez dago erabilgarri.",
    es: "El centrocampista del Atlético de Madrid no estará disponible para la próxima jornada liguera.",
    en: "The Atlético de Madrid midfielder will not be available for the next league match."
  },
  contenido: [
    {
      texto: {
        eu: "Atlético de Madriden erdilaria, Rodrigo Mendoza, ezin izango da hurrengo ligako neurketan egon, Rayo Vallecano aurkako partiduan bosgarren txartel horia jasotakoan.",
        es: "El centrocampista del Atlético de Madrid, Rodrigo Mendoza, no podrá estar disponible para el próximo compromiso liguero ante el Espanyol después de ver la quinta tarjeta amarilla del ciclo durante el encuentro frente al Rayo Vallecano.",
        en: "Atlético de Madrid midfielder Rodrigo Mendoza will not be available for the next league fixture against Espanyol after receiving his fifth yellow card of the cycle during the match against Rayo Vallecano."
      }
    },
    {
      texto: {
        eu: "Jokalaria bigarren zatiko hasieran zigortu zuten, Alfonso Espinori egindako faltaren ondoren, eta automatikoki zigorra jaso zuen 25. jardunaldirako, non talde gorriblankoak Espanyoli egingo dion harrera Riyadh Air Metropolitanoan.",
        es: "El futbolista fue amonestado en el inicio de la segunda mitad, tras una falta sobre Alfonso Espino, y quedó automáticamente sancionado para la jornada 25, en la que el conjunto rojiblanco recibirá al Espanyol en el Riyadh Air Metropolitano.",
        en: "The player was booked at the start of the second half after a foul on Alfonso Espino, and was automatically suspended for matchday 25, when the rojiblanco team will host Espanyol at the Riyadh Air Metropolitano."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/atleticoMadrid.png",
    alt: {
      eu: "Atlético de Madrid jokalariak",
      es: "Jugadores del Atlético de Madrid",
      en: "Atlético de Madrid players"
    }
  },
  fecha: "2026-02-11"
},
{
  id: 8,
  titulo: {
    eu: "Erreserbako indarrak exaren motibazioaren aurka",
    es: "La furia del revulsivo contra la motivación del ex",
    en: "The fury of the substitute against the ex's motivation"
  },
  descripcionCorta: {
    eu: "Espanyol eta Celta berdindu egin zuten, sentsazio nahasia utziz.",
    es: "El Espanyol y el Celta empataron dejando una sensación ambivalente.",
    en: "Espanyol and Celta drew, leaving an ambivalent feeling."
  },
  contenido: [
    {
      texto: {
        eu: "RCDE Stadiumean berdinketa gertatu zen, Espanyolen erreakzio ahalmena eta Celtaren jarraikortasuna agerian utziz, bi aurrelari ezagun zaharren bidez aurkariaren kontrola borrokatzeko bidea aurkitu zuten.",
        es: "El RCDE Stadium asistió a un empate que dejó una sensación ambivalente, marcado por la capacidad de reacción del Espanyol y la persistencia de un Celta que encontró en dos viejos conocidos el camino para combatir.",
        en: "RCDE Stadium witnessed a draw that left an ambivalent feeling, marked by Espanyol's reaction capacity and Celta’s persistence, who found in two familiar faces the way to fight back."
      }
    },
    {
      texto: {
        eu: "Espanyolek erantzunak aurkitu zituen bankutik eta bisitarien hasierako nagusitasuna neutralizatu zuen, baina bi aurrelari ex-perikoen eragin emozionalak, batez ere Borja Iglesiasek, partidua orekatzea ekarri zuen.",
        es: "El Espanyol encontró respuestas en su banquillo y logró neutralizar el dominio inicial visitante, pero el peso emocional de los dos delanteros ex pericos, especialmente de Borja Iglesias, terminó equilibrando un partido que parecía resuelto.",
        en: "Espanyol found answers from the bench and neutralized the visitors' initial dominance, but the emotional weight of the two former Espanyol forwards, especially Borja Iglesias, ended up balancing a match that seemed decided."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/espayol.png",
    alt: {
      eu: "Espanyol jokalariak",
      es: "Jugadores del Espanyol",
      en: "Espanyol players"
    }
  },
  fecha: "2026-02-10"
},
{
  id: 9,
  titulo: {
    eu: "Pablo Martinezen osasun txostena eta ezintasuna estimatua",
    es: "Parte médico de Pablo Martínez y periodo estimado de baja",
    en: "Medical report of Pablo Martínez and estimated time out"
  },
  descripcionCorta: {
    eu: "Levante UDko erdilaria ez da erabilgarri eskuineko belauneko lesioagatik.",
    es: "El centrocampista del Levante UD estará de baja por lesión en la rodilla izquierda.",
    en: "Levante UD midfielder will be unavailable due to a left knee injury."
  },
  contenido: [
    {
      texto: {
        eu: "Pablo Martinezek astelehenean eginiko proba medikoek berretsi dute Levante UDko erdilaria belauneko barne albo lotailuaren maila moderatuko distentsio bat duela, Valentziaren aurkako derbian gertatutako lesioa.",
        es: "Las pruebas médicas realizadas a Pablo Martínez este lunes han confirmado que el centrocampista del Levante UD sufre un esguince de grado moderado en el ligamento lateral interno de la rodilla izquierda, lesión producida durante el derbi ante la Valencia.",
        en: "Medical tests conducted on Pablo Martínez this Monday confirmed that the Levante UD midfielder suffers a moderate-grade sprain in the medial collateral ligament of the left knee, an injury sustained during the derby against Valencia."
      }
    },
    {
      texto: {
        eu: "Kapitala partidan utzi behar izan zuen min ikusgarriak medio, baita tobilloak ere kaltetu ziren, baina azken hau gutxiago larri da.",
        es: "El capitán granota tuvo que abandonar el encuentro con visibles molestias tras una acción en la que también se vio afectado el tobillo, aunque esta última dolencia reviste menor gravedad.",
        en: "The Granota captain had to leave the match with visible discomfort after an action in which his ankle was also affected, though the latter injury is of lesser severity."
      }
    },
    {
      texto: {
        eu: "Lehen azterketek baztertu zuten lesio larri bat, baina proba osagarriak diagnostikoa zehazteko balio izan dute.",
        es: "Las primeras exploraciones ya descartaban una rotura severa, pero las pruebas complementarias han permitido concretar el diagnóstico.",
        en: "Initial examinations ruled out a severe tear, but complementary tests allowed the diagnosis to be specified."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/levanted.png",
    alt: {
      eu: "Levante UD jokalariak",
      es: "Jugadores del Levante UD",
      en: "Levante UD players"
    }
  },
  fecha: "2026-02-09"
},
{
  id: 10,
  titulo: {
    eu: "Berreskuratze saioa Son Bibilonian, lesio hirurik gabe",
    es: "Sesión de recuperación en Son Bibiloni sin los tres lesionados",
    en: "Recovery session at Son Bibiloni without the three injured"
  },
  descripcionCorta: {
    eu: "RCD Mallorcak entrenamendu saio bat burutu du Son Bibilonian etziko partidua prestatuz.",
    es: "El RCD Mallorca ha realizado una sesión de entrenamiento en Son Bibiloni preparando el partido del domingo.",
    en: "RCD Mallorca conducted a training session at Son Bibiloni preparing for Sunday’s match."
  },
  contenido: [
    {
      texto: {
        eu: "RCD Mallorcak astelehenean goizean entrenamendu saio berri bat burutu du Ciutat Esportiva Antonio Asensio instalazioetan, Son Bibilonian.",
        es: "El RCD Mallorca ha completado una nueva sesión de entrenamiento este lunes por la mañana en las instalaciones de la Ciutat Esportiva Antonio Asensio de Son Bibiloni.",
        en: "RCD Mallorca completed a new training session this Monday morning at the Ciutat Esportiva Antonio Asensio facilities in Son Bibiloni."
      }
    },
    {
      texto: {
        eu: "Helburua etziko igandeko Celta aurkako neurketa prestatzea da, 18:30etan, Liga txapelketako 25. jardunaldian, Abanca Balaídos estadioan jokatuko dena.",
        es: "Con el objetivo de seguir preparando el encuentro del próximo domingo contra el Celta, a las 18:30 horas, correspondiente a la jornada 25 del campeonato de Liga, que se disputará en el estadio Abanca Balaídos.",
        en: "The aim is to continue preparing for the upcoming Sunday match against Celta at 18:30, corresponding to matchday 25 of the League championship, to be played at the Abanca Balaídos stadium."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/mallorca.png",
    alt: {
      eu: "RCD Mallorca jokalariak entrenatzen",
      es: "Jugadores del RCD Mallorca entrenando",
      en: "RCD Mallorca players training"
    }
  },
  fecha: "2026-02-08"
},
{
  id: 11,
  titulo: {
    eu: "Real Oviedo astelehenean atseden hartu du Ovie Ejaria eta David Costas kontuan hartuta",
    es: "El Real Oviedo descansó este lunes pendiente de Ovie Ejaria y David Costas",
    en: "Real Oviedo rested this Monday keeping an eye on Ovie Ejaria and David Costas"
  },
  descripcionCorta: {
    eu: "Real Oviedo atseden saio bat izan du, aurreko porrotaren ondoren.",
    es: "El Real Oviedo disfrutó de un día de descanso tras la derrota frente al Athletic.",
    en: "Real Oviedo had a rest day following the defeat against Athletic."
  },
  contenido: [
    {
      texto: {
        eu: "Real Oviedo astelehenean atseden saioa izan zuen Carlos Tartierean Athletic-en aurkako porrotaren ondoren, non taldeak hainbat une lehiatu zen baina bigarren zatian amore eman zuen.",
        es: "El Real Oviedo disfrutó este lunes de jornada de descanso tras la derrota frente al Athletic en el Carlos Tartiere, un encuentro en el que el equipo compitió durante muchos tramos pero acabó cediendo en la segunda mitad.",
        en: "Real Oviedo enjoyed a rest day this Monday following the defeat against Athletic at Carlos Tartiere, a match in which the team competed during many stretches but ultimately gave way in the second half."
      }
    },
    {
      texto: {
        eu: "Talde urdinak asteartetik aurrera berriro entrenatuko du El Requexónen, Liga txapelketako 25. jardunaldiko Real Sociedad aurkako neurketa prestatzen hasteko, zapatuan 14:00etan Reale Arenan jokatuko dena.",
        es: "La plantilla azul retomará el trabajo mañana martes en la Ciudad Deportiva de El Requexón, donde comenzará a preparar el compromiso correspondiente a la jornada 25 del campeonato de Liga frente a la Real Sociedad, previsto para el sábado a las 14:00 horas en el Reale Arena.",
        en: "The blue squad will resume work tomorrow Tuesday at the El Requexón Sports City, where they will begin preparing for the League matchday 25 fixture against Real Sociedad, scheduled for Saturday at 14:00 at the Reale Arena."
      }
    }
  ],
  imagenFinal: {
    src: "/T.Laliga/oviedo.png",
    alt: {
      eu: "Real Oviedo jokalariak",
      es: "Jugadores del Real Oviedo",
      en: "Real Oviedo players"
    }
  },
  fecha: "2026-02-07"
}

];


export default function Berriak() {
  const { idioma } = useContext(LanguageContext);

  const [noticias, setNoticias] = useState([]);
  const [show, setShow] = useState(false);
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

  const noticiasPorPagina = 9;
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    setNoticias(noticiasMock);
  }, []);

  const indiceUltima = paginaActual * noticiasPorPagina;
  const indicePrimera = indiceUltima - noticiasPorPagina;
  const noticiasVisibles = noticias.slice(indicePrimera, indiceUltima);
  const totalPaginas = Math.ceil(noticias.length / noticiasPorPagina);

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-5 text-center">
        {idioma === "eu" ? "Berriak" : idioma === "es" ? "Noticias" : "News"}
      </h1>

      <div style={{ minHeight: "600px" }}>
        <Row xs={1} md={2} lg={3} className="g-4">
          {noticiasVisibles.map((n) => (
            <Col key={n.id}>
              <Card
                className="h-100 shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setNoticiaSeleccionada(n);
                  setShow(true);
                }}
              >
                <Card.Body>
                  <Card.Title>{n.titulo[idioma]}</Card.Title>
                  <Card.Text>{n.descripcionCorta[idioma]}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{n.fecha}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Paginación */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="outline-primary"
            disabled={paginaActual === 1}
            onClick={() => setPaginaActual(paginaActual - 1)}
          >
            ← Anterior
          </Button>

          <span className="align-self-center">
            {paginaActual} / {totalPaginas}
          </span>

          <Button
            variant="outline-primary"
            disabled={paginaActual === totalPaginas}
            onClick={() => setPaginaActual(paginaActual + 1)}
          >
            Siguiente →
          </Button>
        </div>
      )}

      {/* Modal noticia completa */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{noticiaSeleccionada?.titulo[idioma]}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {noticiaSeleccionada?.contenido.map((p, index) => (
            <p key={index} style={{ lineHeight: "1.7" }}>
              {p.texto[idioma]}
            </p>
          ))}

          {noticiaSeleccionada?.imagenFinal && (
            <div className="text-center mt-4">
              <Image
                src={noticiaSeleccionada.imagenFinal.src}
                alt={noticiaSeleccionada.imagenFinal.alt[idioma]}
                style={{ maxWidth: "300px" }}
                className="img-fluid rounded shadow-sm"
              />
            </div>
          )}

          <small className="text-muted d-block mt-3">
            {noticiaSeleccionada?.fecha}
          </small>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

## Things you need to know about Beacons

![Beacon Cover Image](https://media-cdn.tripadvisor.com/media/photo-s/0f/23/03/8c/olympiastadion-berlin.jpg)
(Bilder/1_1Einstiegseat.png)

Leitfrage:

Stadion / Konzert - Sitzplätze finden / Verloren sein? Oder besseren Platz als einen kurzfristig gekauften schlechten Platz?
Lösung: Beacons

* Was ist ein "Beacon"?

    - Bed. übersetzt "Leuchtfeuer / Leuchtturm" und funktioniert auch exakt so.
      Das "i" vor den Namen beschreibt einfach nur die Zugehörigkeit dieser Produkte zu Apple, welche die Beacons nun seit 2013 
      vertreiben.
    - Ähnlich wie der Leuchtturm ist ein Beacon sich seiner exakten Umgebung nicht bewusst, sondern sendet lediglich ein Signal über
      seinen Standpunkt aus. - Die Schiffe sehen zwar den Leuchtturm, dieser aber nicht die Schiffe.
      Was beim Leuchtturm eben diese Schiffe sind, sind beim Beacon bluethoothkompatible Geräte.
      Ein Beacon ist aber natürlich auch wesentlich kleiner als ein "handelsüblicher" Leuchtturm, Tobias hat ein paar seiner eigenen 
      Beacons zu Demonstrationszwecken bereitgestellt! (Rumgehen lassen der Beacons)
      
    - Bleiben wir beim Beispiel des Stadions, von solchen Beacons wurden beispielsweise im "Levi-Stadium" in Californien in geregelten 
      Abständen von ungefähr 30 Metern, insgesamt mehr als 2000 Stück angebracht.
      Wieso so viele und wozu erkläre ich anhand ihrer Funktionsweise im nächsten Schaubild.

![Intro](Bilder/1_Einstieg.png)

* Funktionsweise eines "Beacons"?

    - Hier sehen wir verschiedene Arten von Datenübertragung in Zusammenhang mit der Akkulaufzeit und der möglichen Entfernung.
      Wie ihr sicher noch von letzter Woche wisst, ist RFID eine scannbare und damit sehr nahe Form der Datenübertragung via 
      Radiowellen.
      Das ihr hoffentlich noch nie versucht habt eure Thoska stromtechnisch aufzuladen liegt schlicht daran, dass der RFID Chip sich bei 
      jeder Interaktion mit einem Scangerät erneut auflädt. Der Akkuverbrauch ist also quasi nicht gegeben.
      
      Auf der ganz anderen Seite haben wir das GPS, das Global Positioning System. 
      Wie die meisten von euch wissen werden funktioniert das via Satellitensignalen und damit auf riesige Entfernung relativ genau - 
      und verbraucht etlich viel Akku. Es gibt Gründe wieso nach der PokemonGo Zeit beinahe jeder einen externen Akku zuhause liegen 
      hat.
      
      Die Beacons senden auf Basis der sogenannten BLE-Technik. (Bluethooth-Low-Energy)
      Die maximale Reichweite dieser Technik variiert bei Beacons zwischen einer handvoll Metern bishin zu 70, je nach Beacongröße.
      Die Genauigkeit und Akkulaufzeit hängt ebenfalls davon ab, wie stark das Singal gesendet werden soll.
      
* Wozu wollen wir dann über 2000 Beacons in einem Stadium?
      
    - Der Beacon sendet also ein Bluethooth-Singal mit seinem Standpunkt an alle umliegenen Bluethoothgeräte.
      Um dieses Singal überhaupt empfangen zu können benötigigt ihr entsprechende Apps auf euren Handys.
      In unserem Beispiel die App des Stadiums.
      Diese App sendet die empfangenen Signale und damit eure Entfernung zu den einzelnen Beacons zu einem Server, der diese dann 
      verarbeitet und eure Position bestimmen kann. Ihr seht, je mehr Beacons umso genauer die Verarbeitung.
      
      So könnt ihr nach wenigen Sekunden im Stadion direkt via App zu eurem Sitzplatz geführt werden.
      Oder sogar zu einem anderen Hotdog-Stand, wenn bei einem anderen die Hotdogs ausgehen.
      Beacons können euch auch darauf aufmerksam machen, dass noch ein besserer Platz zur Verfügung steht der nicht weit von eurem 
      entfernt ist.
      
      An sich bringen Beacons etliche marketingtechnische und besonders servicetechnische Vorteile mit sich.
      
      Aber keine Sorge, weder ihr noch eure Daten sind durch Beacons gefährdet. Die Bluethoothstrahlung der BLE-Technik ist auch in 
      Masse absolut unbedenklich, zudem können Beacons  keine Daten empfangen, sie sind mit keinem Gerät direkt verbunden und dienen nur 
      der Signalausbreitung.
      
      Inwiefern Beacons noch benutzt werden und welche Möglichkeiten sich darüber hinaus bieten dürft ihr gleich in einer Gruppenarbeit 
      herausfinden.
      Da wir wissen wie sehr ihr alle das aufstehen und nach vorne kommen liebt, haben wir uns dafür entschieden euch davon zu 
      verschonen.
      Stattdessen dürft ihr im github eure Ergebnisse eintragen und wir screenen sie an, damit sie auch jeder lesen und sehen kann.
      
      (Ab hier bitte ein wenig mehr zu den Fragen bzw github Einführung Jann)
      

* Video: Things you need to know about Beacons

see [YouTube video - 10 Things you need to know about Beacons](https://www.youtube.com/watch?v=L44m7otNI7o)

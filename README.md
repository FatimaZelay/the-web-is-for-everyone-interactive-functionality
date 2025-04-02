# Interactive Functionality

### Tumi Mundo


Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Ik heb gewerkt aan de playlists Pagina van Tumi Mundo, Ik heb de playlists gerenderd, de images en de omschrijvingen. Ik heb hiervoor ook gewerkt aan de like functie, ik heb ervoor gezorgd dat wanneer de gebruiker een playlist liked dat het dan toegevoegd wordt bij de Liked Playlists ook heb ik een playbutton aangemaakt (die werkt nog niet). Ik heb voor deze website een UI State toegevoegd, namelijk de succes state. Zodra je een playlist liked wordt het zoals ik al zei toegevoegd in de 'Liked playlist', de succes state komt te voorschijn als het is gelukt.

Hieronder kan je een filmpje zien van hoe de website functioneerd:


https://github.com/user-attachments/assets/be2a926b-6356-47bc-88aa-31116a85c060

Bezoek de website via deze link:

https://the-web-is-for-everyone-interactive-1ob9.onrender.com

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

Ik heb voor deze functionaliteiten gekozen omdat ik het mogelijk wil maken voor gebruikers om favoriete playlisten ergens te kunnen toevoegen zodat het makkelijk terug te vinden is voor de gebruiker/ouder in dit geval. 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->


De technieken die ik heb gebruikt zijn HTML, CSS, JS en NodeJS.

Voor HTML heb ik liquid gebruikt, head.liquid, foot.liquid, index.liquid voor alle playlists en liked.liquid voor de geliked playlysist.
Voor CSS heb ik 2 stylesheets gebruikt, de style.css voor de index.liquid en de liked.css voor de liked liquid. Ik heb dat kunnen doen door de volgende code te verwerken in de head.liquid:

` < link rel="stylesheet" href="/styles/style.css" >
    {% if title == "Liked Playlists" %}
        <link rel="stylesheet" href="/styles/styleliked.css">
      {% endif %} `

## Installatie

<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

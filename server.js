// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('')
// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {
  const apiResponse = await fetch ('https://fdnd-agency.directus.app/items/tm_playlist');

  const apiResponseJSON = await apiResponse.json ();
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid', { playlists: apiResponseJSON.data});
});


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})
app.get('/liked', async function (request, response) {  

  const likedapiResponse = await fetch('https://fdnd-agency.directus.app/items/tm_playlist')
  const likedResponseJSON  = await likedapiResponse.json() 

  response.render('liked.liquid', { playlists: likedResponseJSON.data, succes_message: request.query.succes });
});

app.post('/like/:id', async function(request, response) {
  await fetch('https://fdnd-agency.directus.app/items/fabrique_messages', {
    method: 'POST',
    body: JSON.stringify({
      for: 'Fatima_' + request.params.id,
      from: 1,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

  response.redirect(303, '/liked/?succes=De playlist is toegevoegd!')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8001)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
<script setup>
    // import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()
    
    // Coordonnées de l'utilisateur
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    // Lorsque le composant est monté dans la vue
    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.495328, 6.8044455], 17)

        // Création d'un icone
        let myIcon = Leaflet.icon({
            iconUrl:    '/marker-icon-2x.png',       // Image de l'icone
            shadowUrl:  '/marker-shadow.png',     // Ombre de l'icone
            iconSize:   [25, 41],                       // Taille de l'icone
            shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
            iconAnchor: [-10,-10],                      // Ancrage de l'icone
            shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
            popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
        })

        // Ajout d'un marqueur
        let marker = Leaflet.marker([47.495328, 6.8044455], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        marker.bindPopup('Notre magasin')

        // Recentrage de la carte au bout de 5 secondes
        // à une autre position
        setTimeout(
            function() {
                map.panTo([47.50133850064826, 6.807621746718467])
            }, 5000
        )

        // ajout nouveau marker
        // à la position de recentrage
        let marker2 = Leaflet.marker([48.862725, 2.287592], {icon: myIcon}).addTo(map)

        let marker3 = Leaflet.marker([47.24314260885164, 6.025849819155536], {icon: myIcon}).addTo(map)
        let marker4 = Leaflet.marker([47.24586304180681, 6.017545335648662], {icon: myIcon}).addTo(map)
        

        // Ajouter une popup / infobulle
        marker2.bindPopup('Ophtalmo Harnist Philippe <br/> 9 Rue Xavier Marmier, 25000 Besançon')
        marker3.bindPopup('Ophtalmo Thiery Eric <br/> 1 A Av. Denfert Rochereau, 25000 Besançon')
        marker4.bindPopup('Ophtalmo Jary Claude <br/> 2 Av. Commandant Marceau, 25000 Besançon')

    }) // Fin onMounted

    // Fonction de détection de la géolocalisation via le navigateur
    const locMe = () => {
        // geolocalisation du navigateur 
        // => lorsque la geolocalisation a été faite 
        //          => appel d'une fonction showLocation
        navigator.geolocation.getCurrentPosition(showLocation)
    }
    // Fonction appelée par locMe pour charger les valeurs de géolocalisation
    const showLocation = (position) => {
console.log("postion", position)        
        // Recuperation latitue longitude
        coordMe.value.latitude = position.coords.latitude
        coordMe.value.longitude = position.coords.longitude
        // Recentrage de la carte sur position utilisateur
        map.panTo([coordMe.value.latitude, coordMe.value.longitude])
        // Créer un marker
        let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map) 
        // Ajouter une popup / infobulle
        markerMe.bindPopup('Vous êtes ici')
    }

</script>


<template>
    <div class="container-fluid" style="color:black;">
        <div class="input-group" style="text-align: center;">
            <button class="login-btn" @click="locMe()">Se localiser</button> 
        </div>
        <div class="container-fluid">
            <div id="map"> 
            </div>
        </div>
    </div>
</template>

<style scoped>
#map{
    width: 1200px;
    height: 70vh;
    width: 100%;
}
.btn {
   align-items: center;
}

.login-btn {
  font-family: 'Jost', sans-serif;
  padding: 3px 5px;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.3s;
  margin-bottom: 10px;
}
.login-btn:hover {
  background: #333;
}
</style>
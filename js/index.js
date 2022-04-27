"use strict";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.

const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        this.map = L.map('map').setView([50.85045, 4.34878], 13);
        L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
            tileSize: 512,
            zoomOffset: -1,

        }).addTo(this.map);
        this.loadMarkers();

        // gebruik de functie "loadMarkers" om de markers toe te voegen
    },
    loadMarkers() {

        fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=street-art&q=%27')

            // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
            .then(response => {
                return response.json();
            })

            .then(data => {
                console.log("data", data);
                data.records.forEach(item => {
                    if (item.fields.geocoordinates) {
                        const coordinate = item.fields.geocoordinates;
                    }

                });


            })


    },
    addMarker(coordinate) {
        var marker = L.marker([coordinate]).addTo(this.map);
    }
}

app.init();
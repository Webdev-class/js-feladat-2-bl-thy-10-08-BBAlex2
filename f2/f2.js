/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const locations = require('../locations.json');
const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';
const xhttp = XMLHttpRequest();
async function f2(lat, long, timeStr, hour){
    xhttp.open("GET",`${APIAddress}latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`);
    xhttp.onload = function(load){
        data = JSON.parse(this.responseText);

        let tempHour = data.hourly.temperature_2m[hour-1];
        console.log(tempHour);
    }
    xhttp.send();
}

module.exports = f2;
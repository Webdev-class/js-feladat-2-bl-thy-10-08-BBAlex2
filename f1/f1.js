
const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';
const xhttp = new XMLHttpRequest();
async function f1 (lat, long, timeStr) {
    xhttp.open("GET",`${APIAddress}latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`);
    xhttp.onload = function(load){
        data = JSON.parse(this.responseText);

        let tempSum = 0;
        data.hourly.temperature_2m.forEach((num) => {
            tempSum += num;
        });

        let tempAvg = Math.floor(tempSum / 24);
        console.log(tempAvg);
    }
    xhttp.send();
}

module.exports = f1;
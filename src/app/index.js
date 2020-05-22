const {Weather} = require('./Wheater');
const {UI} = require('./UI');
const {Store} = require('./store');

require('./index.css');

const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

async function fetchWeather(){
   const data = await weather.getWeather();
   ui.render(data);
   console.log(data);
}

document.getElementById('btnChangeWeather').addEventListener('click', (e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    fetchWeather();
    store.setLocationData(city, countryCode);
});
document.addEventListener('DOMContentLoaded', fetchWeather);
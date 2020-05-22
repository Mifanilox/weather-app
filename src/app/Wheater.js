export class Weather{
    constructor(city, countryCode){
        this.apiKey = "7dafcc6cba43d28d53e01874901bcc97";
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URL);
        const json = response.json();
        return json;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}
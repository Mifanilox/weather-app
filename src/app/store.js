export class Store{
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountryCode = 'uk';
    }

    getLocationData(){
        this.city = (localStorage.getItem('city') === null)? this.defaultCity : localStorage.getItem('city');
        this.countryCode = (localStorage.getItem('countryCode') === null)? this.countryCode : localStorage.getItem('countryCode');

        return {
            city : this.city,
            countryCode : this.countryCode
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city' , city);
        localStorage.setItem('countryCode' , countryCode);
    }
}
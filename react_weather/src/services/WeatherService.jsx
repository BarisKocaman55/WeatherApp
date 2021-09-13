import axios from "axios";

const apiKey = 'c132320981d93dcda795b30e370e16a6';

export default class WeatherService {
    getCityWeather(cityName) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    }
}
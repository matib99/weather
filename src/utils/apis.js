import { MAX_GIFS } from '../containers/gifFrame/const';

const getOpenWeatherApiUrl = (lat, lon) => 
`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutelly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

export const fetchWeather = (lat, lon) => 
    new Promise ((resolve) => {
        const url = getOpenWeatherApiUrl(lat, lon);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve({
                hourly: data.hourly, 
                daily: data.daily
            })
        })
        
    })

const getTenorApiUrl = ( phrase, pos ) => 
`https://api.tenor.com/v1/search?q=${phrase}&key=${process.env.REACT_APP_TENOR_API_KEY}&locale=en_US&contentfilter=medium&ar_range=standard&media_filter=minimal&limit=${MAX_GIFS}${(pos!=='') ? ('&pos='+pos) : ''}`;

export const fetchGifs = (phrase, pos) => 
    new Promise (resolve => {
        const url = getTenorApiUrl(phrase, pos);
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
    })
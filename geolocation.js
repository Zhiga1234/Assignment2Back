
import('node-fetch').then((nodeFetch) => {
    const fetch = nodeFetch.default;
  
    const lat = 51.5074;
    const long = -0.1278;
    const apikey = '';
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&units=metric`;
  
    fetch(api)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.floor(data.main.temp);
        const sensacionTermica = Math.floor(data.main.feels_like);
        const city = data.name;
        const country = data.sys.country;
        const icon = data.weather[0].icon;
  
        console.log('Temp:', temperature);
        console.log('Feel like:', sensacionTermica);
        console.log('City:', city);
        console.log('Country:', country);
        console.log('Icon:', icon);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });
  
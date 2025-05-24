// Dummy weather data with emojis
const dummyWeatherData = {
  delhi: {
    name: "Delhi",
    country: "India",
    temp: 36,
    weather: "Sunny ☀️",
    humidity: 25,
    message: "It's a bright and sunny day in Delhi! Don't forget your sunglasses. 😎"
  },
  mumbai: {
    name: "Mumbai",
    country: "India",
    temp: 30,
    weather: "Cloudy ☁️",
    humidity: 70,
    message: "Skies are cloudy in Mumbai. A perfect day for a walk. 🚶‍♂️"
  },
  dehradun: {
    name: "Dehradun",
    country: "India",
    temp: 28,
    weather: "Rainy 🌧️",
    humidity: 80,
    message: "It's raining in Dehradun. Carry an umbrella if you're heading out! ☔"
  },
  london: {
    name: "London",
    country: "UK",
    temp: 15,
    weather: "Foggy 🌫️",
    humidity: 60,
    message: "London is foggy today. Drive safe and stay warm. 🔥"
  }
};

function getOfflineWeather() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value.toLowerCase().trim();
  const resultDiv = document.getElementById("weatherResult");

  const data = dummyWeatherData[city];

  if (data) {
    const resultHTML = `
      <h3>${data.name}, ${data.country}</h3>
      <p><strong>${data.weather}</strong></p>
      <p>Temperature: <strong>${data.temp}°C</strong></p>
      <p>Humidity: <strong>${data.humidity}%</strong></p>
      <p>${data.message}</p>
    `;
    resultDiv.innerHTML = resultHTML;
  } else {
    resultDiv.innerHTML = `<p>🙁 Sorry, no weather data found for this city.</p>`;
  }

  cityInput.value = ""; // Clear input field
}

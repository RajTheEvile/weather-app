import React, { Component } from "react";
import CityChosenContext from "../../Context/CityChosenContext";
import { ThreeDots } from "react-loader-spinner";
import { 
  Container, 
  WeatherCard, 
  WeatherDescription, 
  TempText, 
  WeatherInfo, 
  ErrorText, 
  Title, 
  CityInfo, 
  CityText, 
  SectionTitle, 
  MoreInfoText, 
  InfoGrid, 
  WeatherIcon, 
  RetryButton 
} from './styledComponents';

class Main extends Component {
  state = {
    weatherData: null,
    status: "loading", // Possible values: "loading", "error", "loaded"
    prevCity: null,
    prevCountry: null,
  };

  API_KEY = "6b607bd784fff53f01beb849ae738c1a";

  componentDidMount() {
    this.fetchWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    const { chosenCity, selectedCountry } = this.context;

    if (chosenCity !== prevState.prevCity || selectedCountry !== prevState.prevCountry) {
      this.fetchWeather();
      this.setState({ prevCity: chosenCity, prevCountry: selectedCountry });
    }
  }

  fetchWeather = async () => {
    const { chosenCity, selectedCountry } = this.context;
    if (!chosenCity || !selectedCountry) return;

    this.setState({ status: "loading" });

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity},${selectedCountry}&appid=${this.API_KEY}&units=metric`;
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        this.setState({ weatherData: data, status: "loaded" });
      } else {
        this.setState({ status: "error" });
      }
    } catch (error) {
      this.setState({ status: "error" });
    }
  };

  getBackgroundColor = (weatherDescription) => {
    switch (weatherDescription) {
      case 'Clear':
        return '#ffeb3b'; // Sunny (light yellow)
      case 'Clouds':
        return '#90a4ae'; // Cloudy (light gray)
      case 'Rain':
        return '#64b5f6'; // Rainy (light blue)
      case 'Snow':
        return '#f0f4c3'; // Snowy (light white/greenish)
      default:
        return '#ffffff'; // Default background
    }
  };

  // UI Functions
  Loading = () => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
      <ThreeDots color="#475569" height={50} width={50} />
    </div>
  );

  Error = () => (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "24px", color: "red" }}>⚠️ Oops! Something went wrong.</p>
      <ErrorText>Failed to fetch weather data. Please try again.</ErrorText>
      <RetryButton onClick={this.fetchWeather}>Retry 🔄</RetryButton>
    </div>
  );

  Loaded = () => {
    const { weatherData } = this.state;
    return (
      <WeatherCard style={{ backgroundColor: this.getBackgroundColor(weatherData.weather[0].main) }}>
        <WeatherInfo>
          <SectionTitle>Current Weather</SectionTitle>
          <TempText>Temperature: {weatherData.main.temp}°C</TempText>
          <WeatherDescription>
            Weather: {weatherData.weather[0].description}
            <WeatherIcon 
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} 
              alt={weatherData.weather[0].description}
            />
          </WeatherDescription>
        </WeatherInfo>

        <InfoGrid>
          <div>
            <SectionTitle>Wind Info</SectionTitle>
            <MoreInfoText>Wind Speed: {weatherData.wind.speed} m/s</MoreInfoText>
            <MoreInfoText>Wind Gust: {weatherData.wind.gust} m/s</MoreInfoText>
          </div>
          <div>
            <SectionTitle>Pressure & Humidity</SectionTitle>
            <MoreInfoText>Pressure: {weatherData.main.pressure} hPa</MoreInfoText>
            <MoreInfoText>Humidity: {weatherData.main.humidity}%</MoreInfoText>
          </div>
        </InfoGrid>

        <InfoGrid>
          <div>
            <SectionTitle>Sunrise & Sunset</SectionTitle>
            <MoreInfoText>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</MoreInfoText>
            <MoreInfoText>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</MoreInfoText>
          </div>
          <div>
            <SectionTitle>Additional Information</SectionTitle>
            <MoreInfoText>Visibility: {weatherData.visibility / 1000} km</MoreInfoText>
            <MoreInfoText>Timezone: {weatherData.timezone / 3600} hours from UTC</MoreInfoText>
          </div>
        </InfoGrid>
      </WeatherCard>
    );
  };

  renderContent = () => {
    switch (this.state.status) {
      case "loading":
        return this.Loading();
      case "error":
        return this.Error();
      case "loaded":
        return this.Loaded();
      default:
        return null;
    }
  };

  render() {
    return (
      <CityChosenContext.Consumer>
        {({ chosenCity, selectedCountry }) => (
          <Container>
            <Title>Weather Information</Title>
            <CityInfo>
              <CityText>Selected City: {chosenCity}</CityText>
              <CityText>Country: {selectedCountry}</CityText>
            </CityInfo>
            {this.renderContent()}
          </Container>
        )}
      </CityChosenContext.Consumer>
    );
  }
}

Main.contextType = CityChosenContext;

export default Main;

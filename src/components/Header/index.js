import React, { Component } from "react";
import CityChosenContext from "../../Context/CityChosenContext"; // Import context
import { Head, HeaderInfo, Input, Button, SuggestionsList } from "./styledComponents";

class Header extends Component {
  state = {
    location: "",
    suggestions: [],
    activeIndex: -1, // For keyboard navigation
  };

  API_KEY = "6b607bd784fff53f01beb849ae738c1a"; // API Key inside the component

  locationChange = async (event) => {
    const location = event.target.value;
    this.setState({ location, activeIndex: -1 });

    if (location.length > 1) {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${this.API_KEY}`;

      try {
        const response = await fetch(geoUrl);
        if (response.ok) {
          const suggestions = await response.json();
          this.setState({ suggestions });
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      this.setState({ suggestions: [] });
    }
  };

  selectLocation = (cityData, changeCity) => {
    this.setState({ location: cityData.name, suggestions: [], activeIndex: -1 });
    changeCity(cityData.name, cityData.country);
  };

  handleKeyDown = (event, changeCity) => {
    const { activeIndex, suggestions } = this.state;
    if (event.key === "ArrowDown" && activeIndex < suggestions.length - 1) {
      this.setState((prevState) => ({ activeIndex: prevState.activeIndex + 1 }));
    } else if (event.key === "ArrowUp" && activeIndex > 0) {
      this.setState((prevState) => ({ activeIndex: prevState.activeIndex - 1 }));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      this.selectLocation(suggestions[activeIndex], changeCity);
    }
  };

  render() {
    const { location, suggestions, activeIndex } = this.state;

    return (
      <CityChosenContext.Consumer>
        {({ chosenCity, changeCity }) => (
          <Head>
            <HeaderInfo>{location || chosenCity || "Enter a location"}</HeaderInfo>
            <div style={{ position: "relative" }}>
              <Input
                type="search"
                placeholder="Enter your location"
                value={location}
                onChange={this.locationChange}
                onKeyDown={(event) => this.handleKeyDown(event, changeCity)}
              />
              {suggestions.length > 0 && (
                <SuggestionsList>
                  {suggestions.map((item, index) => (
                    <li key={index} onClick={() => this.selectLocation(item, changeCity)} className={activeIndex === index ? "active" : ""}>
                      {item.name}, {item.country}
                    </li>
                  ))}
                </SuggestionsList>
              )}
            </div>
            <Button type="button" onClick={() => changeCity(location, "")}>
              Select
            </Button>
          </Head>
        )}
      </CityChosenContext.Consumer>
    );
  }
}

export default Header;

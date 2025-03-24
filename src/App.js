import React, { Component } from "react";
import CityChosenContext from "./Context/CityChosenContext";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {
    chosenCity: "Delhi",
    selectedCountry: "IN",
  };

  changeCity = (city, country) => {
    this.setState({ chosenCity: city, selectedCountry: country });
  };

  render() {
    return (
      <CityChosenContext.Provider
        value={{
          chosenCity: this.state.chosenCity,
          selectedCountry: this.state.selectedCountry,
          changeCity: this.changeCity,
        }}
      >
        <div className="home">
        <Header />
        <Main />
        </div>
        
      </CityChosenContext.Provider>
    );
  }
}

export default App;

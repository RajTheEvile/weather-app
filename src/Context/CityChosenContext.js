import React from "react";

const CityChosenContext = React.createContext({
  chosenCity: "Delhi",
  selectedCountry: "IN",
  changeCity: () => {}, // Function to update city
});

export default CityChosenContext;

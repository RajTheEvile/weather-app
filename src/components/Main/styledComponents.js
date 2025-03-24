import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Arial', sans-serif;
  background: #f4f6f9;
  border-radius: 12px;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.2em;
  color: #0288d1;
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const WeatherCard = styled.div`
  padding: 25px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  color: #333;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  }
`;

const WeatherIcon = styled.img`
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-left: 10px;
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2));
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 1.4em;
  color: #455a64;
  margin-bottom: 12px;
  font-weight: bold;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 25px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

const MoreInfoText = styled.p`
  font-size: 1.1em;
  color: #616161;
  margin: 5px 0;
`;

const TempText = styled.p`
  font-size: 1.7em;
  color: #2c6e49;
  font-weight: bold;
`;

const WeatherDescription = styled.p`
  font-size: 1.2em;
  color: #3e4b5b;
  font-style: italic;
`;

const ErrorText = styled.p`
  color: #d32f2f;
  font-weight: bold;
  font-size: 1.1em;
`;

const LoadingText = styled.p`
  color: #f57c00;
  font-weight: bold;
  font-size: 1.1em;
`;

const CityText = styled.p`
  font-size: 1.1em;
  color: #455a64;
  font-weight: bold;
`;

const CityInfo = styled.div`
  margin: 20px 0;
  font-size: 1.3em;
  text-align: center;
  font-weight: bold;
  color: #37474f;
`;

 const RetryButton = styled.button`
  background-color: #ff4757;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background-color: #e84118;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;



export { 
    Container, 
    WeatherCard, 
    WeatherDescription, 
    TempText, 
    WeatherInfo, 
    ErrorText, 
    LoadingText, 
    Title, 
    CityInfo, 
    CityText, 
    SectionTitle, 
    MoreInfoText, 
    InfoGrid, 
    WeatherIcon ,
    RetryButton
};

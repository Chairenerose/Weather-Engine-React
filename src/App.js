import logo from './logo.svg';
import WeatherForm from "./WeatherForm";
import WeatherInformation from "./WeatherInformation";
import GitHub from "./GitHub";





import './App.css';

function App() {
  return (
    <div className="container">
      <div className="boxWrap">
        <div className="my-city">
          {" "}
          <h3>Accra</h3>
        </div>
        <div id="background">
          {" "}
          <WeatherInformation /> {" "}
        </div>
        <div className="row weather-forecast" id="forecast"></div>
        <div className="form-section">
          <WeatherForm />
        </div>
        <div className="developer">
          <GitHub />
        </div>
      </div>
    </div>
  );
}

export default App;

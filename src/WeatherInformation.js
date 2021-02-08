import React from "react";
import Images from "./Images";
export default function WeatherInformation() {
    return (
        <div>
            <ul id="dateAndTemp">
                <li id="degrees"></li>
                <li>
                    {" "}
                    <a id="celsius" href="/">
                        <h4> 27°</h4>C
          </a>
          |
          <a id="fahrenheit" href="/">
                        °F
          </a>
                </li>
                <li>
                    <Images />
                </li>
                <li>
                    <h3 id="weatherDescription">Sunny</h3>
                </li>
            </ul>
            <hr />
            <h4 id="time">Sunday 22:33</h4>
            <div className="row">
                <div className="col-6" id="wet">
                    <i className="fas fa-tint-slash"></i> Humidity:{" "}
                    <h5 id="humidityInfo">83%</h5>
                </div>
                <div className="col-6" id="breeze">
                    <i className="fas fa-wind"></i> Wind: <h5 id="windInfo">3.5km/h</h5>
                </div>
            </div>
        </div>
    );
}

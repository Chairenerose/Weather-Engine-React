import React from "react";

export default function WeatherForm() {
    return (
        <div className="form-group">
            <form id="city-form">
                <label form="cityInput"></label>
                <input
                    type="text"
                    className="form-control"
                    id="city-input"
                    placeholder="Enter City"
                    autoComplete="off"
                />
                <input type="submit" className="btn btn-secondary" value="Search" />
            </form>
        </div>
    );
}
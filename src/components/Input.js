import React, { useState } from "react";
import "./css/Input.css";

function Input(props) {
    var [cityName, setCityName] = useState("");
    var [units, setUnits] = useState("metric");

    const updateCityName = (e) => {
        setCityName(e.target.value);
    };

    const updateUnits = (e) => {
        setUnits(e.target.value);
    };

    return (
        <div className="input-box">
            <form
                className="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.getWeather(cityName, units);
                }}
            >
                <input
                    type="text"
                    id="cityNameInput"
                    name="cityName"
                    placeholder="Enter the city name"
                    value={cityName}
                    onChange={updateCityName}
                />
                <select name="units" id="units-dropdown" onChange={updateUnits}>
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                </select>
                <button id="submitButton" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Input;

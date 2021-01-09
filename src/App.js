import React from "react";
import axios from "axios";
import "./App.css";

// Custom Components
import Header from "./components/Header";
import Input from "./components/Input";
import Report from "./components/Report";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null,
            units: "metric",
        };
    }

    getWeather = async (cityName, units) => {
        const API_KEY = "4f4c304f97bdfc7d0c81c554f443a735";
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
        let queryParams = "q=" + cityName;
        let unitsParams = "units=" + units;
        let reqUrl =
            baseUrl + queryParams + "&" + unitsParams + "&appid=" + API_KEY;
        await axios.get(reqUrl).then((response) => {
            this.setState({
                weather: response.data,
                units: units,
            });
        });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Input getWeather={this.getWeather} />
                {this.state.weather !== null && (
                    <Report
                        weather={this.state.weather}
                        units={this.state.units}
                    />
                )}
                <Footer />
            </div>
        );
    }
}

export default App;

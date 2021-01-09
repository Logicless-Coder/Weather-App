import React from "react";
import "./css/Report.css";

function Report({ weather, units }) {
    // const getWeatherIconSrc = () => {
    //     let url =
    //         "http://openweathermap.org/img/wn/" +
    //         weather.weather[0].icon +
    //         "@2x.png";
    //     return url;
    // };

    const getWeatherBackground = () => {
        const id = weather.weather[0].id;
        let url = "";
        if (id >= 200 && id <= 232) {
            url =
                "https://www.mercurynews.com/wp-content/uploads/2020/08/SJM-L-LIGHTNING-0817-11.jpg";
        } else if (id >= 300 && id <= 321) {
            url =
                "https://miro.medium.com/max/3840/1*Y338ZQ__SXaRDqRpF3NJJQ.jpeg";
        } else if (id >= 500 && id <= 531) {
            url =
                "https://moneymarketing.co.za/wp-content/uploads/2019/12/Heavy-rain-scaled.jpeg";
        } else if (id >= 600 && id <= 622) {
            url = "https://www.weathernationtv.com/app/uploads/2019/12/u.jpg";
        } else if (id >= 700 && id <= 781) {
            url =
                "https://d1acid63ghtydj.cloudfront.net/09-10-2018/t_bc3e74a6f3cd4aa7827169e691066448_name_fog.JPG";
        } else if (id === 800) {
            url =
                "https://images.financialexpress.com/2020/04/sky1200.jpg?w=1200&h=800&imflag=true";
        } else if (id >= 801 && id <= 804) {
            url =
                "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg";
        }
        return url;
    };

    const parseTime = (time) => {
        var timeString = new Date(time * 1000).toLocaleTimeString("en-US");
        return timeString;
    };

    return (
        <div className="report">
            <div className="card" id="overview">
                <img
                    src={getWeatherBackground()}
                    alt="weather background"
                    className="bg-img"
                    width="100%"
                    height="66%"
                />
                <p className="weather-main">{weather.weather[0].main}</p>
                <p className="weather-desc">{weather.weather[0].description}</p>
            </div>
            <div className="card" id="temperature">
                <div class="temp-box" id="temp">
                    <span>{weather.main.temp}</span> degrees
                </div>
                <div class="temp-box" id="feels-like">
                    <span>{weather.main.feels_like}</span> degrees
                </div>
                <div class="temp-box" id="pressure">
                    <span>{weather.main.pressure}</span> hPa
                </div>
                <div class="temp-box" id="humidity">
                    <span>{weather.main.humidity}</span> %
                </div>
            </div>
            <div className="card" id="extra">
                <div class="extra-box" id="lat">
                    <span>{weather.coord.lat}</span> Latitude
                </div>
                <div class="extra-box" id="lon">
                    <span>{weather.coord.lon}</span> Longitude
                </div>
                <div class="extra-box" id="sunrise">
                    <span>{parseTime(weather.sys.sunrise)}</span>
                </div>
                <div class="extra-box" id="sunset">
                    <span>{parseTime(weather.sys.sunset)}</span>
                </div>
                <div class="extra-box" id="visibility">
                    <span>{weather.visibility}</span> metres
                </div>
                <div class="extra-box" id="wind">
                    <span>{weather.wind.speed}</span>{" "}
                    {units === "metric" ? "metres/seconds" : "miles/hour"}
                </div>
            </div>
        </div>
    );
}

export default Report;

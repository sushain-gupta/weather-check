import React, { useState, useEffect } from "react";
import { WiStrongWind } from "react-icons/wi";
import { BsDroplet } from "react-icons/bs";
import sunny from "../assets/svg/sunny.svg";
import clear from "../assets/svg/clear.svg";
import cloudy from "../assets/svg/cloudy.svg";
import rain from "../assets/svg/rain.svg";
import thunder from "../assets/svg/thunder.svg";
import haze from "../assets/png/haze.png";
import thunderRainy from "../assets/svg/thunderstorm-rainy.svg";
import snow from "../assets/svg/snow.svg";

function Home({ data }) {
  const city = data && data.name;
  const temprature = data.main && data.main.temp;
  const windSpeed = data.wind && data.wind.speed;
  const humidity = data.main && data.main.humidity;
  const weatherStatus = data.weather && data.weather[0].main.toLowerCase();
  const weatherDesc = data.weather && data.weather[0].description.toLowerCase();
  var imageSrc;

  switch (weatherStatus) {
    case "clear":
      imageSrc = clear;
      break;
    case "sunny":
      imageSrc = sunny;
      break;
    case "clouds":
      imageSrc = cloudy;
      break;
    case "rain":
      imageSrc = rain;
      break;
    case "thunder":
      imageSrc = thunder;
      break;
    case "haze":
      imageSrc = haze;
      break;
    case "snow":
      imageSrc = snow;
      break;

    default:
      break;
  }

  switch (weatherDesc) {
    case "thunderstorm with heavy rain":
      imageSrc = thunderRainy;
      break;
    case "thunderstorm with rain":
      imageSrc = thunderRainy;
      break;
    case "thunderstorm with light rain":
      imageSrc = thunderRainy;
      break;

    default:
      break;
  }

  const [dateState, setDateState] = useState("");

  setInterval(() => {
    var date = new Date();
    var currTime =
      (date.getHours() > 12 ? date.getHours() % 12 : date.getHours()) +
      ":" +
      (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());

    setDateState(currTime);
  }, 1000);

  return (
    <section
      className={`flex w-screen h-screen items-center justify-center backdrop-blur-lg`}
    >
      <h1
        className={`${
          !data.main ? "scale-100" : "scale-0 hidden"
        } font-bold text-8xl italic transition-all duration-300`}
      >
        Weather search
      </h1>
      <div
        className={`${
          data.main ? "scale-100" : "scale-0 hidden"
        } transition-all duration-300 justify-center`}
      >
        <div className="card min-w-sm max-w-sm w-full bg-gray-50/50 border shadow-xl rounded-xl hover:bg-gray-50/70 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-md mb-2 px-4 pt-4">
            <div className="flex justify-between">
              <div className="badge relative top-0">
                <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 p-2">
                  {city}
                </span>
              </div>
              <span className="text-lg font-bold ">{dateState}</span>
            </div>
          </h2>

          <div className="flex items-center p-4 px-20">
            <div className="flex justify-center items-center w-60">
              <img src={imageSrc} className="h-max w-max" alt="" />
            </div>
          </div>
          <div className="text-md pt-4 pb-4 px-4">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <span className="flex space-x-2 items-center">
                  <WiStrongWind /> <span>{windSpeed}</span>
                </span>
                <span className="flex space-x-2 items-center">
                  <BsDroplet /> <span>{humidity}</span>
                </span>
              </div>
              <div>
                <h1 className="text-6xl">
                  {temprature}
                  <sup className="text-xl align-top top-0">o</sup>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

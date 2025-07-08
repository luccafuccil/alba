import { useEffect, useState } from "react";

function WeatherAPI() {
  const [coords, setCoords] = useState(() => {
    const saved = localStorage.getItem("userCoords");
    return saved
      ? JSON.parse(saved)
      : { latitude: -22.9068, longitude: -43.1729 };
  });
  const [weather, setWeather] = useState(() => {
    const saved = localStorage.getItem("userWeather");
    return saved ? JSON.parse(saved) : null;
  });
  const [city, setCity] = useState(() => {
    return localStorage.getItem("userCity") || "";
  });

  useEffect(() => {
    if (!localStorage.getItem("userCoords") && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newCoords = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          setCoords(newCoords);
          localStorage.setItem("userCoords", JSON.stringify(newCoords));
        },
        () => {}
      );
    }
  }, []);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.current_weather);
      });

    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const cityName =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.state;
        setCity(cityName);
      });
  }, [coords]);

  if (!weather)
    return <div className="weather-load">Loading weather conditions...</div>;

  return (
    <div className="weather-widget">
      <div className="weather-text">
        {city && (
          <>
            Weather in {city} looks{" "}
            {weather.weathercode === 0 ? "clear" : "cloudy"} right now, at{" "}
            {weather.temperature}°C.
            <br />
            How about a cup of tea?
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherAPI;

import { useEffect, useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  setDefaultLocation,
  setWeatherData,
  setIsFetching,
} from "./redux/action";
import { selectDefaultLocation, selectWeatherData, selectIsFetching } from "./redux/Selector";

function App() {
  const [vh, setVh] = useState(window.innerHeight);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const defaultLocation = useSelector(selectDefaultLocation);
  const weatherData = useSelector(selectWeatherData);
  const isFetching = useSelector(selectIsFetching);

  function apiRequest(location) {
    dispatch(setWeatherData(location))
  }

  function getLocation() {
    axios
      .get(`https://api.geoapify.com/v1/ipinfo?&apiKey=${import.meta.env.VITE_IP_KEY}`)
      .then((data) => {
        dispatch(
          setDefaultLocation(
            data.data.city.name +
              " " +
              data.data.state.name +
              " " +
              data.data.country.name_native
          )
        );
      })
      .catch(() => {
        // pass
      });
  }

  useEffect(() => {
    //getLocation();
    const updateVh = () => {
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  useEffect(() => {
    apiRequest(
      "Hyderabad"
      ?.toLowerCase()
    );
  }, [defaultLocation]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      apiRequest(
        inputRef.current.value
          .replace(/[\u0300-\u036f]/g, "")
          ?.toLowerCase()
      );
    }
  }
console.log(isFetching,"fetching");
  return (
    <div className="App h-screen bg-[#23759c]">
    
      <br></br>
      <div className="mt-10 bg-image w-2/4 h-3/6">
        <header className={"header-input"}>
          <div>
            <input
              className={"location-input"}
              placeholder={"Digite a localização."}
              onKeyPress={(e) => {
                handleKeyPress(e);
              }}
              ref={inputRef}
            />
            <p className={"observations"}>
              Press Enter to Send.
              <br />
              Try the outdoor search in English!
            </p>
          </div>
          {isFetching ? (
            <></>
          ) : (
            <div>
              <h1 className={"location"}>{weatherData?.location?.name}</h1>
              <p className={"region"}>
                {weatherData?.location?.region} {weatherData?.location?.country}
              </p>
            </div>
          )}
        </header>
        {isFetching ? (
          <p className="loading">Loading...</p>
        ) : (
          <main className={"main-data"}>
            <div className={"temperature"}>
              <p className={"temp"}>{weatherData?.current?.temp_c}°C</p>
              <p className={"last-update"}>
                Updated {weatherData?.current?.last_updated}
              </p>
            </div>
            <div className={"weather"} >
             <img src={weatherData?.current?.condition?.icon} alt="" />
              <p className={"weather-label"}>
                {weatherData?.current?.condition?.text}
              </p>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;

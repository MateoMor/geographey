import { useStopwatch } from "react-timer-hook";

import { createContext, useContext, useEffect, useState } from "react";
import countries from "../data/countries.json";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [country, setCountry] = useState("");

  const [countriesPlayed, setCountriesPlayed] = useState([]);

  const [countriesGuessed, setCountriesGuessed] = useState([]);

  const [countriesSkipped, setCountriesSkipped] = useState([]);

  useEffect(() => {
    setCountry(
      randomElement(
        countries.filter((co) => !countriesPlayed.includes(co.alpha3Code))
      )
    );
  }, [countriesPlayed]);

  const randomElement = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  };

  const { seconds, minutes, hours, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <Context.Provider
      value={{
        countriesLen: countries.length,
        randomElement,
        setCountry,
        country,
        setCountriesGuessed,
        countriesGuessed,
        countriesPlayed,
        setCountriesPlayed,
        setCountriesSkipped,
        countriesSkipped,
        seconds,
        minutes,
        hours,
        start,
        pause,
        reset,
      }}
    >
      {children}
    </Context.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import countries from "../data/countries.json";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [country, setCountry] = useState("0");

  const [countriesGuessed, setCountriesGuessed] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(countriesGuessed);
    setCountry(
      randomElement(
        countries.filter((co) => !countriesGuessed.includes(co.alpha3Code))
      )
    );
  }, [counter]);

  const randomElement = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  };

  return (
    <Context.Provider
      value={{
        randomElement,
        setCountry,
        country,
        setCounter,
        counter,
        setCountriesGuessed,
        countriesGuessed,
      }}
    >
      {children}
    </Context.Provider>
  );
};

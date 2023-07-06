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

  const [flag, setFlag] = useState("");

  useEffect(() => {
    console.log(countriesGuessed);
    setCountry(
      randomElement(
        countries.filter((co) => !countriesGuessed.includes(co.alpha3Code))
      )
    );
    setFlag(import(`../data/flags/${country.flag}`));
  }, [counter]);

  // chatGPT code
  useEffect(() => {
    const loadFlag = async () => {
      const module = await import(`../data/flags/${country.flag}`);
      setFlag(module.default);
    };

    loadFlag();
  }, [country.flag]);

  const randomElement = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  };

  return (
    <Context.Provider
      value={{
        /* score: state.score, */
        randomElement,
        setCountry,
        country,
        setCounter,
        counter,
        setCountriesGuessed,
        countriesGuessed,
        flag,
      }}
    >
      {children}
    </Context.Provider>
  );
};

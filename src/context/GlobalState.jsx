import { useStopwatch } from "react-timer-hook";

import { createContext, useContext, useEffect, useState } from "react";

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

  const [gameFinished, setGameFinished] = useState(false);

  const [score, setScore] = useState(0);

  const [currentColor, setCurrentColor] = useState("#F53");

  const [countries, setCountries] = useState([1]);

  const [open, setOpen] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const colors = {
    bronce: "#D47835",
    silver: "#949091",
    gold: "#DDA430",
  };

  useEffect(() => {
    if (countriesPlayed.length != countries.length) {
      setCountry(
        randomElement(
          countries.filter((co) => !countriesPlayed.includes(co.alpha3Code))
        )
      );
    } else {
      pause();
      setGameFinished(true);
      setScore((countriesGuessed.length / countries.length) * 100);
    }
  }, [countriesPlayed]);

  useEffect(() => {
    if (gameFinished) {
      document.getElementById(
        "scoreBar"
      ).style.transform = `translateX(${score}%)`;
    }
  }, [score]);

  useEffect(() => {
    if (gameFinished) {
      document.getElementById("stopWatch").style.left = "180px";
    }
  }, [gameFinished]);

  const randomElement = (array) => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  };

  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: true,
  });

  const resetGame = () => {
    setShowMenu(false);
    reset();
    setScore(0);
    setCountriesPlayed([]);
    setCountriesGuessed([]);
    setCountriesSkipped([]);
    setGameFinished(false);
  };

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
        resetGame,
        gameFinished,
        score,
        colors,
        currentColor,
        setCurrentColor,
        reset,
        setGameFinished,
        setCountries,
        open,
        setOpen,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

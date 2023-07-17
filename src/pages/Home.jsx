import { enablePageScroll } from "scroll-lock";
import LayoutCard from "../components/LayoutCard";
import { useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";

function Home() {
  const { reset, pause, setGameFinished } = useGlobalState();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    enablePageScroll();
    setGameFinished(false)
    reset()
    pause()
  }, []);

  return (
    <div className="bg-pageColor ">
      <section className="flex flex-wrap gap-14 justify-evenly px-[11%] py-[5%]">
        <LayoutCard
          to="/geographey/world"
          name="World"
          imgPath="/geographey/maps-images/world.svg"
        />
        <LayoutCard
          to="/geographey/americas"
          name="Americas"
          imgPath="/geographey/maps-images/americas.svg"
        />
        <LayoutCard
          to="/geographey/asia"
          name="Asia"
          imgPath="/geographey/maps-images/asia.svg"
        />
        <LayoutCard
          to="/geographey/europe"
          name="Europe"
          imgPath="/geographey/maps-images/europe.svg"
        />
        <LayoutCard
          to="/geographey/africa"
          name="Africa"
          imgPath="/geographey/maps-images/africa.svg"
        />
      </section>
    </div>
  );
}

export default Home;

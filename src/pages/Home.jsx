import { enablePageScroll } from "scroll-lock";
import LayoutCard from "../components/LayoutCard";
import { useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";

function Home() {
  const { reset, pause, setGameFinished, setShowMenu } = useGlobalState();

  useEffect(() => {
    enablePageScroll();
    window.scrollTo({ top: 0 });
    setShowMenu(false);
    setGameFinished(false);
    reset();
    pause();
  }, []);

  return (
    <div className="bg-pageColor">
      <section className="flex flex-wrap gap-8 justify-evenly px-[11%] max-[700px]:px-[6%] py-[5%]">
        <LayoutCard
          to="/world"
          name="World"
          imgPath="/maps-images/world.svg"
        />
        <LayoutCard
          to="/americas"
          name="Americas"
          imgPath="/maps-images/americas.svg"
        />
        <LayoutCard
          to="/asia"
          name="Asia"
          imgPath="/maps-images/asia.svg"
        />
        <LayoutCard
          to="/europe"
          name="Europe"
          imgPath="/maps-images/europe.svg"
        />
        <LayoutCard
          to="/africa"
          name="Africa"
          imgPath="/maps-images/africa.svg"
        />
      </section>
    </div>
  );
}

export default Home;

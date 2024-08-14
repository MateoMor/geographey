import { enablePageScroll } from "scroll-lock";
import LayoutCard from "../components/LayoutCard";
import { useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { pathData } from "../constants/routesData";

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
        {pathData.map((card, index) => (
          <LayoutCard
            key={index}
            to={card.to}
            name={card.name}
            imgPath={card.imgPath}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;

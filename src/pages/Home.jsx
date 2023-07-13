import LayoutCard from "../components/LayoutCard";

function Home() {
  return (
    <div className="bg-pageColor ">
      <section className="flex flex-wrap gap-14 justify-evenly px-[11%] py-[5%]">
        <LayoutCard name="World" imgPath="/geographey/maps-images/world.svg"/>
        <LayoutCard name="Americas" imgPath="/geographey/maps-images/americas.svg"/>
        <LayoutCard name="Asia" imgPath="/geographey/maps-images/asia.svg"/>
        <LayoutCard name="Europe" imgPath="/geographey/maps-images/europe.svg"/>
        <LayoutCard name="Africa" imgPath="/geographey/maps-images/africa.svg"/>
      </section>
    </div>
  );
}

export default Home;

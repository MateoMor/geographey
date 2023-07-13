import LayoutCard from "../components/LayoutCard";

function Home() {
  return (
    <div className="bg-pageColor ">
      <section className="flex flex-wrap gap-14 justify-evenly px-[11%] py-[5%]">
        <LayoutCard name="World" imgPath="/maps-images/world.svg"/>
        <LayoutCard name="Americas" imgPath="/maps-images/americas.svg"/>
        <LayoutCard name="Asia" imgPath="/maps-images/asia.svg"/>
        <LayoutCard name="Europe" imgPath="/maps-images/europe.svg"/>
        <LayoutCard name="Africa" imgPath="/maps-images/africa.svg"/>
      </section>
    </div>
  );
}

export default Home;

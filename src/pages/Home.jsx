import LayoutCard from "../components/LayoutCard";

function Home() {
  return (
    <div className="bg-pageColor ">
      <section className="flex flex-wrap gap-14 justify-evenly px-[13%] py-[5%]">
        <LayoutCard name="World" imgPath="/world.svg"/>
        <LayoutCard name="Americas" imgPath="/americas.svg"/>
        <LayoutCard name="Asia" imgPath="/asia.svg"/>
        <LayoutCard name="Europe" imgPath="/europe.svg"/>
        <LayoutCard name="Africa" imgPath="/africa.svg"/>
      </section>
    </div>
  );
}

export default Home;

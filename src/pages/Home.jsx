function Home() {
  return (
    <div className="bg-pageColor ">
      <section className="flex flex-wrap gap-14 justify-evenly px-[15%] py-[5%]">
        <div className="map-card">
          <div className="map-card-content">World</div>
        </div>
        <div className="map-card">
          <div className="map-card-content">Americas</div>
        </div>
        <div className="map-card">
          <div className="map-card-content">Asia</div>
        </div>
        <div className="map-card">
          <div className="map-card-content">Europe</div>
        </div>
        <div className="map-card">
          <div className="map-card-content">Africa</div>
        </div>
      </section>
    </div>
  );
}

export default Home;

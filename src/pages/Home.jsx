function Home() {
  return (
    <div className="bg-pageColor h-[100vh]">
      <section className="flex flex-wrap gap-6 justify-between px-[10%] py-[2%]">
        <div className="map-card">World</div>
        <div className="map-card">Americas</div>
        <div className="map-card">Asia</div>
        <div className="map-card">Africa</div>
        <div className="map-card">Oceania</div>
      </section>
    </div>
  )
}

export default Home
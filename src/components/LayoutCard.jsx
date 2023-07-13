function LayoutCard({ name, imgPath }) {
  return (
    <div className="map-card">
      <div className="map-card-share-properties absolute w-[100%] h-[100%] bg-white shadow-[0px_0px_5px_1px_#00000046] flex flex-col items-center p-2 ">
        <div className="border-2 border-solid bg-[#B6EAFF] border-black w-[100%] h-[70%]  rounded-md">
          <img src={imgPath} alt={name} />
          <img src="/flags/afg.svg" alt="" />
        </div>
        <button className="menu-button w-[80%] mt-[22px]">{name}</button>
      </div>
    </div>
  );
}

export default LayoutCard;

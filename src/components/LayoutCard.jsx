import { Link } from "react-router-dom";

function LayoutCard({ name, imgPath, to }) {
  return (
    <Link
      to={to}
      className="map-card"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <div className="map-card-share-properties absolute w-[100%] h-[100%] bg-white shadow-[0px_0px_5px_1px_#00000046] flex flex-col items-center p-2 ">
        <div className="border-2 border-solid bg-[#B6EAFF] border-black w-[100%] h-[70%]  rounded-md overflow-hidden flex justify-center items-center">
          <img src={imgPath} alt={name} />
        </div>
        <button className="menu-button w-[80%] mt-[10%]">{name}</button>
      </div>
    </Link>
  );
}

export default LayoutCard;

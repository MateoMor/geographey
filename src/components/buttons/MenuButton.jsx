import { HiMenu } from "react-icons/hi";

function MenuButton() {
  return (
    <button className="button bg-secondaryColor" onClick={() => document.getElementById("menu").style.display = "flex"}>
      <HiMenu size="50%"/>
    </button>
  );
}

export default MenuButton;

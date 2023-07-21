import { Link, Outlet } from "react-router-dom";
import Footer from "../containers/Footer";
import { HiMenu, HiX } from "react-icons/hi";
import { useGlobalState } from "../context/GlobalState";
import HeaderLink from "../components/HeaderLink";

function Header() {
  const { open, setOpen } = useGlobalState();

  return (
    <div>
      <header className="bg-mainColor w-[100%] flex justify-between pt-[8pt] pb-0 px-[20px] overflow-hidden max-[800px]:overflow-visible relative">
        <Link
          to="/geographey"
          className="relative text-white text-[2em] font-bold"
        >
          Geographey
        </Link>
        <div
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className="min-[800px]:hidden absolute top-[50%] -translate-y-[50%] right-7 "
        >
          {open ? (
            <HiX size="40px" fill="#fff" />
          ) : (
            <HiMenu size="40px" fill="#fff" />
          )}
        </div>
        <nav
          className={`flex gap-3 max-[800px]:responsive-menu ease-in-out duration-100 ${open ? "" : "translate-x-[100%]"}`}
        >
          <HeaderLink to="/geographey/world">World</HeaderLink>
          <HeaderLink to="/geographey/americas">Americas</HeaderLink>
          <HeaderLink to="/geographey/europe">Europe</HeaderLink>
          <HeaderLink to="/geographey/asia">Asia</HeaderLink>
          <HeaderLink to="/geographey/africa">Africa</HeaderLink>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;

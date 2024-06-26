import { Link, Outlet } from "react-router-dom";
import Footer from "../containers/Footer";
import { HiMenu, HiX } from "react-icons/hi";
import { useGlobalState } from "../context/GlobalState";
import HeaderLink from "../components/HeaderLink";

function Header() {
  const { open, setOpen } = useGlobalState();

  return (
    <div className="overflow-hidden">
      <header className="bg-mainColor w-[100%] flex justify-between pt-[8pt] pb-0 px-[20px] overflow-hidden max-[800px]:overflow-visible relative">
        <Link
          to="/geographey"
          className="relative text-white text-[2em] font-bold"
        >
          Geographey
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="min-[800px]:hidden absolute top-[50%] -translate-y-[50%] right-7 "
        >
          {open ? (
            <HiX size="40px" fill="#fff" />
          ) : (
            <HiMenu size="40px" fill="#fff" />
          )}
        </div>
        <nav
          className={`flex gap-3 max-[800px]:responsive-menu duration-100 ${
            open ? "" : "max-[800px]:translate-x-[100%]"
          } `}
        >
          <HeaderLink to="/world">World</HeaderLink>
          <HeaderLink to="/americas">Americas</HeaderLink>
          <HeaderLink to="/europe">Europe</HeaderLink>
          <HeaderLink to="/asia">Asia</HeaderLink>
          <HeaderLink to="/africa">Africa</HeaderLink>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Header;

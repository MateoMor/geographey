import { Link, Outlet } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useGlobalState } from "../context/GlobalState";
import HeaderLink from "../components/mainPage/HeaderLink";

import { pathData } from "../constants/routesData";
import { APP_NAME, mainPath } from "../constants/appData";

function Header() {
  const { open, setOpen } = useGlobalState();

  return (
    <div className="overflow-hidden">
      <header className="bg-mainColor w-[100%] flex justify-between pt-[8pt] pb-0 px-[20px] overflow-hidden max-[800px]:overflow-visible relative">
        <Link
          to={mainPath}
          className="relative text-white text-[2em] font-bold"
        >
          {APP_NAME}
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
          {pathData.map((route, index) => (
            <HeaderLink key={index} to={mainPath + route.to}>
              {route.name}
            </HeaderLink>
          ))}
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;

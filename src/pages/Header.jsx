import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div >
      <header className="bg-mainColor w-[100%] flex justify-between  pt-[10px] pb-0 px-[50px] overflow-hidden">
        <Link to="/" className="relative text-white text-[2em] font-bold">Geographey</Link>
        <nav className="flex gap-3">
          <Link to="/world" className="nav-link">World</Link>
          <Link to="/americas" className="nav-link">Americas</Link>
          <Link to="/europe" className="nav-link">Europe</Link>
          <Link to="/asia" className="nav-link">Asia</Link>
          <Link to="/africa" className="nav-link">Africa</Link>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default Header;

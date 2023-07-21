import { Link } from "react-router-dom";

function HeaderLink({ children, to }) {
  return (
    <Link
      to={to}
      className="relative min-[800px]:pt-3 px-5 text-white max-[800px]:text-black  font-medium hover:active max-[800px]:active:active "
    >
      {children}
    </Link>
  );
}

export default HeaderLink;

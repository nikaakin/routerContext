import { Link } from "react-router-dom";
import { useState } from "react";

const links = [
  { name: "home", to: "./", id: 1 },
  { name: "films", to: "./films", id: 2 },
  { name: "error", to: "./error", id: 3 },
];

const Header = () => {
  const [active, setActive] = useState(links[0].id);

  return (
    <div className="w-[90%] m-auto py-2 border-b-2 border-red-900">
      {links.map(({ name, to, id }) => {
        return (
          <Link
            to={to}
            key={id}
            className={`text-2xl text-orange-800 border-r-orange-800 hover:text-blue-900  mr-5 
            ${active === id ? "active" : null}`}
            onClick={() => setActive(id)}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;

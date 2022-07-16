import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import Context from "./Contex";

const links = [
  { name: "home", to: "./", id: 1 },
  { name: "films", to: "./films", id: 2 },
  { name: "error", to: "./error", id: 3 },
  { name: "Watchlist", to: "./watchlist", id: 4 },
];

const Header = () => {
  const [active, setActive] = useState(links[0].id);
  const { watchlist } = useContext(Context);

  return (
    <div className="w-[90%] m-auto py-2 border-b-2 border-red-900 flex items-start">
      {links.map(({ name, to, id }) => {
        if (name === "Watchlist") {
          return (
            <Link
              to={to}
              key={id}
              className={`text-2xl text-orange-800 border-r-orange-800 hover:text-blue-900 
               mr-5 ml-auto relative
            ${active === id ? "active" : null}`}
              onClick={() => setActive(id)}
            >
              {name}
              <div className="absolute top-[-10px] right-[-20px] text-white bg-emerald-800 p-2 rounded-[50%] text-sm">
                {watchlist.length}
              </div>
            </Link>
          );
        } else {
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
        }
      })}
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[90%] m-auto py-2 border-b-2 border-red-900">
      <Link
        to="./"
        className="text-2xl text-orange-800 border-r-orange-800 hover:text-blue-900   border-r-2 pr-4"
      >
        Home
      </Link>
      <Link
        to="./films"
        className="text-orange-800 text-2xl pl-3 hover:text-blue-900 "
      >
        Films
      </Link>
    </div>
  );
};

export default Header;

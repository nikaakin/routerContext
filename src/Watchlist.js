import { useContext } from "react";
import Context from "./Contex";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { watchlist, setWatchlist } = useContext(Context);

  const deleteItem = (image) => {
    const id = watchlist.filter((item) => {
      return item.image !== image;
    });
    setWatchlist(id);
    window.localStorage.setItem("watchlist", JSON.stringify(id));
  };

  return (
    <div className="flex w-[90%] m-auto mt-4 flex-wrap gap-4 justify-center">
      {watchlist.map(({ image, title, id }, i) => {
        return (
          <div key={i} className="">
            <img src={image} className="w-[200px] mr-4" />
            <h1 className="text-center text-red-800 font-bold my-3 w-[200px] ">
              {title}
            </h1>
            <div className="flex justify-between">
              <button
                className="text-sm px-3 py-1 bg-red-900 rounded-lg text-white hover:opacity-80"
                onClick={() => deleteItem(image)}
              >
                Delete
              </button>
              <Link
                to={`/films/${id}`}
                className="text-sm px-3 py-1 bg-emerald-900 rounded-lg text-white hover:opacity-80"
              >
                Show Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Watchlist;

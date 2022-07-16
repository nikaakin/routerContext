import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Contex";

export default function FilmDisplay() {
  const { id } = useParams();
  const { apiResult, setWatchlist, watchlist } = useContext(Context);

  const myItem = apiResult.find((res) => res.id === id);

  return (
    <div className=" flex gap-5 w-[85%] m-auto mt-5">
      <img className="w-[30%] m-auto" src={myItem.image} />
      <div className=" flex  flex-col justify-between">
        <h1 className="py-2 font-bold text-4xl text-orange-900 text-center ">
          {myItem.title}
        </h1>
        <p className="text-emerald-900 phone-font text-center ">
          {myItem.description}
        </p>
        <div className="flex justify-end  ">
          <button
            onClick={() => {
              if (!watchlist.find((movie) => movie.id === myItem.id)) {
                setWatchlist([...watchlist, myItem]);
                window.localStorage.setItem(
                  "watchlist",
                  JSON.stringify([...watchlist, myItem])
                );
              }
            }}
            className="text-sm px-3 py-1 bg-emerald-900 rounded-lg text-white hover:opacity-80 "
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}

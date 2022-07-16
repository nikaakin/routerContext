import Context from "./Contex";
import { useContext, useState, useEffect } from "react";
import FilmCard from "./FilmCard";
import MyLoader from "./Loader";

const Films = () => {
  const [sliderButton, setSliderButton] = useState(1);
  const [apiResult, setApiResult] = useState([]);
  const [searchFinal, setSearchFinal] = useState("");
  const [search, setSearch] = useState("");

  // loader
  const [isLoading, setIsLoading] = useState(true);

  const { getArray } = useContext(Context);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        setApiResult(data);
        getArray(data);
        setIsLoading(false);
      });
  }, []);

  const filmFilter = () => {
    const filtered = apiResult.filter(({ title }) => {
      return title.toLowerCase().includes(searchFinal.toLowerCase());
    });

    return filtered.map((res) => {
      return isLoading ? (
        <MyLoader />
      ) : (
        <FilmCard
          image={res.image}
          title={res.title}
          description={res.description}
          id={res.id}
          key={res.id}
        />
      );
    });
  };

  return (
    <div className="  w-[95%] m-auto relative overflow-hidden ">
      <br></br>
      <form
        className="mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchFinal(search);
        }}
      >
        <label className="block text-red-800 mb-2 text-center">
          Search a movie
        </label>
        <input
          className="bg-slate-200 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onBlur={() => setSearchFinal(search)}
        />
      </form>

      <div
        className={`flex gap-3 ease duration-500  `}
        style={{ transform: `translate(-${(sliderButton - 1) * 100}%, 0)` }}
      >
        {!searchFinal
          ? isLoading
            ? [...new Array(3)].map((el, i) => {
                return (
                  <MyLoader
                    key={i}
                    className="basis-[33.3%] flex-grow-0 flex-shrink-0 "
                  />
                );
              })
            : apiResult.map((res) => {
                return (
                  <FilmCard
                    image={res.image}
                    title={res.title}
                    description={res.description}
                    id={res.id}
                    key={res.id}
                  />
                );
              })
          : filmFilter()}
      </div>
      <div className="flex justify-between">
        {apiResult.map((movie, i) =>
          i % 3 === 0 ? (
            <button
              key={i}
              className="text-blue-900 text-bold border-y-2 border-blue-900 px-7 py-5 mb-5 rounded-lg
               hover:bg-red-900 hover:text-white"
              onClick={(e) => setSliderButton(+e.target.innerText)}
            >
              {i / 3 + 1}
            </button>
          ) : null
        )}
      </div>
      <button
        className="absolute top-[30%] right-0 text-6xl 
       text-slate-900 text-bold border-y-2 border-slate-900 rounded-lg
               hover:bg-blue-900 hover:text-white"
        onClick={() =>
          setSliderButton(sliderButton === 8 ? 1 : sliderButton + 1)
        }
      >
        &#x2192;
      </button>
      <button
        className="absolute top-[30%] left-0 text-6xl 
        text-slate-900 text-bold border-y-2 border-slate-900 rounded-lg
               hover:bg-blue-900 hover:text-white"
        onClick={() =>
          setSliderButton(sliderButton === 1 ? 8 : sliderButton - 1)
        }
      >
        &#x2190;
      </button>
    </div>
  );
};

export default Films;

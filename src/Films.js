import Context from "./Contex";
import { useContext, useState } from "react";
import FilmCard from "./FilmCard";

const Films = () => {
  const [sliderButton, setSliderButton] = useState(1);

  const { apiResult } = useContext(Context);

  return (
    <div className=" w-[90%] m-auto relative ">
      <br></br>

      <div
        className={`flex gap-3 ease-in duration-500  translate-x-[-${
          (sliderButton - 1) * 100
        }%] `}
      >
        {apiResult.map((res) => {
          return (
            <FilmCard
              image={res.image}
              title={res.title}
              description={res.description}
              id={res.id}
              key={res.id}
            />
          );
        })}
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

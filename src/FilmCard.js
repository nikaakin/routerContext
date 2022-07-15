import { Link } from "react-router-dom";

const FilmCard = ({ image, title, description, id }) => {
  return (
    <div className="basis-[33.3%] flex-grow-0 flex-shrink-0 ">
      <img className="w-[60%] m-auto" src={image} />
      <h1 className="py-2 font-bold text-4xl text-orange-900  ">{title}</h1>
      <p className="text-emerald-900 phone-font">
        {description.length < 80
          ? description
          : description.slice(0, 80).split(" ").slice(0, -1).join(" ") + "..."}
      </p>
      <button
        className="py-2 px-4 border-0 my-5 phone-font-button
       text-white  bg-red-900 rounded-md hover:bg-red-400 "
      >
        <Link to={`${id}`}>Show More...</Link>
      </button>
    </div>
  );
};

export default FilmCard;

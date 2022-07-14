import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "./Contex";

export default function FilmDisplay() {
  const { id } = useParams();
  const { apiResult } = useContext(Context);

  const myItem = apiResult.find((res) => res.id === id);

  return (
    <div className=" flex gap-5 w-[85%] m-auto mt-5">
      <img className="w-[30%] m-auto" src={myItem.image} />
      <div className="">
        <h1 className="py-2 font-bold text-4xl text-orange-900 text-center ">
          {myItem.title}
        </h1>
        <p className="text-emerald-900 phone-font mt-10">
          {myItem.description}
        </p>
      </div>
    </div>
  );
}

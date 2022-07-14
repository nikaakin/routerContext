import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./Films";
import Context from "./Contex";
import { useState, useEffect } from "react";
import FilmDisplay from "./FilmDisplay";

const App = () => {
  const [data, setData] = useState(0);
  const [apiResult, setApiResult] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setApiResult(data));
  }, []);

  const dataContainer = {
    data,
    setData,
  };

  const dataInfo = "Hello";

  // api call

  return (
    <Context.Provider
      value={{
        data,
        setData,
        dataInfo,
        apiResult,
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDisplay />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;

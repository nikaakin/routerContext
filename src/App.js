import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./Films";
import Context from "./Contex";
import { useState, useEffect } from "react";
import FilmDisplay from "./FilmDisplay";

const App = () => {
  const [data, setData] = useState(0);
  const [apiResult, setApiResult] = useState([]);

  const dataInfo = "Hello";

  const getArray = (arr) => {
    setApiResult(arr);
  };

  return (
    <Context.Provider
      value={{
        data,
        setData,
        dataInfo,
        getArray,
        apiResult,
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDisplay />} />
          <Route path="*" element={<h1>something went wrong</h1>} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;

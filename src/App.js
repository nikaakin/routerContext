import Header from "./Header";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./Films";
import Context from "./Contex";
import { useState, useEffect } from "react";
import FilmDisplay from "./FilmDisplay";
import Watchlist from "./Watchlist";

const App = () => {
  const [data, setData] = useState(0);
  const [apiResult, setApiResult] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("watchlist")) {
      setWatchlist(JSON.parse(window.localStorage.getItem("watchlist")));
    }
  }, []);

  const getArray = (arr) => {
    setApiResult(arr);
  };

  return (
    <Context.Provider
      value={{
        data,
        setData,

        getArray,
        apiResult,
        watchlist,
        setWatchlist,
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:id" element={<FilmDisplay />} />
          <Route path="*" element={<h1>something went wrong</h1>} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;

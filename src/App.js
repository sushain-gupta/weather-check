import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { React, useState } from "react";

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <Router>
        <Header setData={setData} />
        <Routes>
          <Route path="/" element={<Home data={data} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

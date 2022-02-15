import logo from "./logo.svg";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

function App() {
  const [page, setPage] = useState("Portfolio");

  return (
    <div className="App">
      <Sidebar page={page} setPage={setPage} />
      <Content page={page} setPage={setPage} />
    </div>
  );
}

export default App;

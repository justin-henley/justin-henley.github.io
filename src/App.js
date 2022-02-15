import logo from "./logo.svg";

import { useState } from "react";
import Sidebar from "./Aside";
import Content from "./Content";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

function App() {
  const [page, setPage] = useState("Portfolio");

  return (
    <Wrapper>
      <Header />
      <Nav />
      <Sidebar page={page} setPage={setPage} />
      <Content page={page} setPage={setPage} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default App;

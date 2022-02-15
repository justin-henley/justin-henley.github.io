import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const Aside = ({ page, setPage }) => {
  console.log(`Sidebar says page is ${page}`);
  return (
    <Div>
      <Header />
      <Nav />
      <Footer />
    </Div>
  );
};

const Div = styled.div``;

export default Aside;

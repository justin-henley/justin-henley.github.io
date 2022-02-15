import React from "react";
import Portfolio from "./Portfolio";

const Content = ({ page, setPage }) => {
  console.log(`Sidebar says page is ${page}`);
  return (
    <div>
      <Portfolio />
    </div>
  );
};

export default Content;

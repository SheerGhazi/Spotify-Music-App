import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Main = () => {
  return (
    <div class="grid grid-cols-4  m-4 gap-5 ">
      <MainLeft/>
      <MainRight/>
    </div>
  );
};

export default Main;

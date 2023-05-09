import React from "react";
import { HeaderSearch } from "../../components";

const Home = () => {
  return (
    <div className="overflow-y-auto ">
      <div className="h-[70px] bg-red-500 flex items-center">
        <HeaderSearch />
      </div>
    </div>
  );
};

export default Home;

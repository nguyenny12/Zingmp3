import React from "react";
import logo from "../assets/logo-dark.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const SlidebarLeft = () => {
  return (
    <div className="overflow-y-auto">
      <div className="w-full h-[70px] py-[15px] px-[15px] flex justify-center items-center ">
        <img src={logo} alt="logo" className="w-[120px] object-contain" />
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink
            to={item.path}
            className="py-2 px-[25px ] font-bold flex text-[#0F7070] text-[13px]  gap-[12px] items-center"
          >
            {item.icons}
            <span>{item.text} </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SlidebarLeft;

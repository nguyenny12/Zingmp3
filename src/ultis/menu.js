import icons from "./icons";

const { MdVideoLibrary, GiMusicSpell, FcLineChart, FcMusic } = icons;
export const sidebarMenu = [
  {
    path: "personal",
    text: "Cá Nhân",
    icons: <MdVideoLibrary size={24} />,
  },
  {
    path: "",
    text: "Khám Phá",
    icons: <GiMusicSpell size={24} />,
  },
  {
    path: "zing-chart",
    text: "#Zingchart",
    icons: <FcLineChart size={24} />,
  },
  {
    path: "follow",
    text: "Theo Dõi",
    icons: <FcMusic size={24} />,
  },
];

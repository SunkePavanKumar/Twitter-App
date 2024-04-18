import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import { PiArrowSquareDownRightFill } from "react-icons/pi";
import { RiFileListLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { GiLeafSkeleton } from "react-icons/gi";

interface IconComponent {
  key: string;
  component: React.ReactNode;
}
function SideNav() {
  const sideNavIcons: IconComponent[] = [
    {
      key: "twitter",
      component: <FaXTwitter />,
    },
    {
      key: "home",
      component: <MdHomeFilled />,
    },
    {
      key: "search",
      component: <IoSearch />,
    },
    {
      key: "notification",
      component: <GoBell />,
    },
    {
      key: "messages",
      component: <MdMailOutline />,
    },
    {
      key: "grok",
      component: <PiArrowSquareDownRightFill />,
    },
    {
      key: "list",
      component: <RiFileListLine />,
    },
    {
      key: "profile",
      component: <IoPersonOutline />,
    },
    {
      key: "more",
      component: <CgMoreO />,
    },
    {
      key: "post",
      component: <GiLeafSkeleton />,
    },
  ];
  return (
    <>
      {sideNavIcons.map((icons, index) => (
        <div key={index} className=" flex justify-end">
          <div
            className={`text-3xl  px-2 py-2 m-2 mr-4 cursor-pointer  w-fit h-fit hover:rounded-full ${
              icons.key === "post"
                ? "bg-blue-400 rounded-full"
                : "hover:bg-gray-900 "
            }`}
          >
            {icons.component}
          </div>
        </div>
      ))}
    </>
  );
}

export default SideNav;

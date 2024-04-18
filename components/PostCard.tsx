import React from "react";
import Image from "next/image";
const PostCard: React.FC = () => {
  return (
    <div className=" grid grid-cols-12 border-gray-500 border-[1px] border-l-0 border-r-0 border-b-0 p-4 hover:bg-gray-900 cursor-pointer transition-all">
      <div className=" col-span-1 ml-2">
        <Image
          src="/avatar.jpg"
          alt="User Avatar"
          width={35}
          height={35}
          className=" rounded-full"
        />
      </div>
      <div className=" col-span-11 ml-3">
        <h4>Pavan Kumar Sunke</h4>
        <p>Hey, Iam doing well! How are you guys? Share you day with me!</p>
      </div>
    </div>
  );
};

export default PostCard;

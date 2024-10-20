import React from "react";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

const Main = () => {
  return (
    <div class="grid grid-cols-4 h-full m-4 gap-5">
      <div class="col-span-1 bg-gray-900 flex justify-between">
        <div className="lib flex">
          <BiLibrary />
          <h3 className="font-medium">Library</h3>
        </div>
        <div className="plus-icon">
          <FaPlus />
        </div>
      </div>
      <div class="col-span-3 bg-gray-900">75%</div>
    </div>
  );
};

export default Main;

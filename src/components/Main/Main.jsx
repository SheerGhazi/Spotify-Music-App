import React from "react";
import { IoLibrarySharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import LibSection from "../LibrarySection/LibSection";

const Main = () => {
  return (
    <div class="grid grid-cols-4 h-full m-4 gap-5 ">
      <div class="col-span-1 bg-gray-900 p-3 rounded-md ">
        <div className="flex justify-between items-center ">
          <div className="lib flex justify-center items-center gap-3">
          <IoLibrarySharp />
            <h3 className="font-semibold text-lg">Your Library</h3>
          </div>
          <div className="plus-icon hover:bg-gray-400 p-1 rounded-full">
          <FiPlus className=" "  />
          </div>
        </div>


     <LibSection heading={"Create Your First Playlist"} desc={"Its easy we will help you"} btncont={"Create PLaylist"} /> 
     <LibSection heading={"Lets find the podcast to follow"} desc={"We will keep you updated on new posts"} btncont={"Browse Podcast"} /> 
      </div>

      <div class="col-span-3 bg-gray-900">75%</div>
    </div>
  );
};

export default Main;

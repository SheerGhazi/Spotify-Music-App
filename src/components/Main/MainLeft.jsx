import React from 'react'
import { IoLibrarySharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import LibSection from "../LibrarySection/LibSection";

const MainLeft = () => {
  return (
    <div class="col-span-1 bg-gray-900 p-3 rounded-md ">
    <div className="flex justify-between items-center ">
      <div className="lib flex justify-center items-center gap-3">
      <IoLibrarySharp />
        <h3 className="font-semibold text-lg">Your Library</h3>
      </div>
      <div className="plus-icon hover:bg-gray-400 p-1 rounded-full">
      <FiPlus className=" "/>
      </div>
    </div>


 <LibSection heading={"Create Your First Playlist"} desc={"Its easy we will help you"} btncont={"Create PLaylist"} /> 
 <LibSection heading={"Lets find the podcast to follow"} desc={"We will keep you updated on new posts"} btncont={"Browse Podcast"} /> 

 <div className='text-xs space-x-6 p-3 leading-loose'>
  <a className='hover:text-gray-600' href="">Safety and Privacy Center</a>
  <a className='hover:text-gray-600' href="">Legal</a>
  <a className='hover:text-gray-600' href="">Privacy Policy</a>
  <a className='hover:text-gray-600' href="">Cookies</a>
  <a className='hover:text-gray-600' href="">Privacy Center</a>
  <a className='hover:text-gray-600' href="">About Ads</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
  <a className='hover:text-gray-600' href="">Accesibilities</a>
 </div>
 <div className='p-3'>
  <a className='text-xs font-bold ' href="">Cookies</a>
 </div>
 <div className='p-3 hover:scale-105 '>
  <a className='text-sm font-bold border boder-white rounded-lg px-3 py-1 ' href=""><button>English</button></a>
 </div>
  </div>
  )
}

export default MainLeft

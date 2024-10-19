import React from 'react'
import { BiLibrary } from "react-icons/bi";

const Main = () => {
  return (
    <div class="grid grid-cols-4 h-full m-4 gap-5">
        <div class="col-span-1 bg-gray-900">
        <BiLibrary />
        </div>
        <div class="col-span-3 bg-gray-900">75%</div>
    </div>
  )
}

export default Main

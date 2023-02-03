import React from "react";
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from "react-icons/hi";

export default function Header() {
  return (
    <div className="bg-white border py-1 px-5">
      <div className="flex justify-between ">
        <div className="search flex items-center border rounded bg-white px-2">
          <button>
            <HiOutlineSearch fontSize={25} />
          </button>
          <input className="py-1 px-2 outline-none rounded min-w-[250px] max-w-[350px]" type="text" placeholder="Search ..." />
        </div>
        <div className="notification flex items-center  gap-2 ">
          <button>
            <HiOutlineBell fontSize={25} />
          </button>
          <button>
            <HiOutlineChatAlt fontSize={25} />
          </button>
          <button className="flex items-center gap-2">
            <div className="users h-[35px] w-[35px] rounded-full border-2"></div>
            <span>admin@gmail.com</span>
          </button>
        </div>
      </div>
    </div>
  );
}

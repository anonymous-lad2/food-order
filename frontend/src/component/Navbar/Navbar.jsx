import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="sticky top-0 px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          Tasty Food
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
            <IconButton>
                <SearchIcon sx={{fontSize: "1.5rem"}}/>
            </IconButton>
        </div>
        <div className=''>
            <Avatar sx={{bgcolor: "white", color: pink.A400}}>S</Avatar>
        </div>
        <div>
            <IconButton>
                <Badge badgeContent={4} sx={{
                    "& .MuiBadge-badge": {
                    backgroundColor: "#242B2E",
                    color: "white",
                }}}>
                    <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
                </Badge>
            </IconButton>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { auth, cart } = useSelector(store => store)
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if(auth.user?.role === "ROLE_CUSTOMER"){
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurants")
    }
  }
  return (
    <div className="sticky top-0 px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={() => navigate("/")} className="logo font-semibold text-gray-300 text-2xl">
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
            {auth.user ? <Avatar onClick={handleAvatarClick} sx={{bgcolor: "white", color: pink.A400, cursor:"pointer"}}>{auth.user?.fullName[0].toUpperCase()}</Avatar> :
            <IconButton onClick={() => navigate("/account/login")}>
              <AccountCircleIcon/>
            </IconButton>}
        </div>
        <div>
            <IconButton onClick={() => navigate('/cart')}>
                <Badge badgeContent={cart?.cartItems.length} sx={{
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

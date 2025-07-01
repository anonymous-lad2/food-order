import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRestaurantById, getRestaurantsCategory } from "../State/Restaurant/Action";

const categories = ["pizza", "burger", "panner", "rice", "icecream"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian only", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = Array(8).fill(1); // Sample data

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant, categorie } = useSelector((store) => store);
  const { id } = useParams();

  const handleFilter = (e) => {
    setFoodType(e.target.value);
    console.log("Filter Changed:", e.target.name, e.target.value);
  };

  console.log("restaurant detail ",restaurant);

  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantsCategory({ jwt, restaurantId: id }))
  }, [dispatch, jwt, id]);

  const images = restaurant?.restaurant?.images || [];

  return (
    <div className="px-5 lg:px-20">
      {/* Breadcrumb */}
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home / India / Indian Fast Food / {id}
        </h3>

        {/* Images */}
        <Grid container spacing={2}>
          {images.length > 0 ? (
            images.map((img, index) => (
              <Grid key={index} item xs={12} lg={6}>
                <img
                  className="w-full h-[40vh] object-cover rounded-md"
                  src={img}
                  alt={`restaurant-img-${index}`}
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography color="textSecondary" align="center">
                No images available.
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* Restaurant Info */}
        <div className="pt-5 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant?.restaurant?.name || "Restaurant Name"}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant?.restaurant?.description || "Restaurant description here."}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>{restaurant?.restaurant?.address[0] || "India, Mumbai, Andheri West, Lokhandwala"}</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span> {restaurant?.restaurant?.openingHours || 'Mon-Sun: 9:00 AM - 9:00 PM (Today)'}</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Filters and Menu */}
      <section className="pt-8 lg:flex relative">
        {/* Filters */}
        <div className="space-y-10 lg:w-[20%]">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h6" gutterBottom>
                Food Type
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  name="food_type"
                  value={foodType}
                  onChange={handleFilter}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />

            <div>
              <Typography variant="h6" gutterBottom>
                Food Category
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  name="food_category"
                  value={foodType}
                  onChange={handleFilter}
                >
                  {restaurant?.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item, index) => (
            <MenuCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;

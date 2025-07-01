import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { categorizeIngredients } from "../../utils/categorizeIngredients";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const ingredients = [
    {
        category: "Nuts & Seeds", 
        ingredients: "Cashews"
    },
    {
        category: "Protein",
        ingredients: "Protein"
    },
    {
        category: "Protein",
        ingredients: "Paneer"
    }
]

const demo = [
    {
        category: "Nuts & Seeds", 
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Paneer", "Milk"]
    },
]

const MenuCard = ({item}) => {

    const [selectedIngredients, setSelectedIngredients] = useState([])

    const dispatch = useDispatch();

    const handleCheckBoxChange = (itemName) => {
        console.log(itemName);
        if(selectedIngredients.includes(itemName)){
            setSelectedIngredients(selectedIngredients.filter((item) => item!==itemName))
        }
        else{
            setSelectedIngredients(...selectedIngredients, itemName)
        }
    }

    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const reqData = {
            token: localStorage.getItem("jwt"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(reqData))
    }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className="lg:flex items-center justify-between">
                <div className="lg:flex items-center lg:gap-5">
                     <img
                        className="w-[7rem] h-[7rem] object-cover"
                        src={item?.images[0]}
                        alt=""
                    />
                    <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                        <p className="font-semibold text-xl">
                            {item?.name}
                        </p>
                        <p>₹{item?.price}</p>
                        <p className="text-gray-400">
                            {item?.description}
                        </p>
                    </div>
                </div>
            </div>
        </AccordionSummary>

        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className="flex gap-5 flex-wrap">
                {
                    Object.keys(categorizeIngredients(item.ingredients)).map((category) => (
                        <div>
                            <p>{category}</p>
                            <FormGroup>
                                {categorizeIngredients(item.ingredients)[category].map((item) => (
                                    <FormControlLabel key={item.name} control={<Checkbox onChange={() => handleCheckBoxChange(item)}/>} label={item.name} />
                                ))}
                            </FormGroup>
                        </div>
                    ))
                }
            </div>
            <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{true ? "Add to Cart" : "Out Of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;

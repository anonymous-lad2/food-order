import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { categorizeIngredients } from "../../utils/categorizeIngredients";

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

    const handleCheckBoxChange = (ingredient) => {
        console.log(ingredient);
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
          <form>
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

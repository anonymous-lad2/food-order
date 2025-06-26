import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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

const MenuCard = () => {

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
                        src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg"
                        alt=""
                    />
                    <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                        <p className="font-semibold text-xl">Burger</p>
                        <p>₹499</p>
                        <p className="text-gray-400">A hamburger or simply burger is a food consisting of fillings--usually a patty of ground meat typically beef--placed inside a bun.</p>
                    </div>
                </div>
            </div>
        </AccordionSummary>

        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
                {
                    demo.map((item) => (
                        <div>
                            <p>{item.category}</p>
                            <FormGroup>
                                {item.ingredients.map((ingredient) => (
                                    <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)}/>} label={ingredient} />
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

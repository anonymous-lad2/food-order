package com.happysat.request;

import com.happysat.model.Category;
import com.happysat.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {

    private String name;

    private String description;

    private Long price;

    private Category category;

    private List<String> images;

    private Long restaurantId;

    private boolean vegetarian;

    private boolean seasonal;

    private List<IngredientsItem> ingredients;
}

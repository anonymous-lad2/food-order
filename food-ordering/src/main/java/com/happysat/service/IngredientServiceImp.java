package com.happysat.service;

import com.happysat.model.IngredientCategory;
import com.happysat.model.IngredientsItem;
import com.happysat.model.Restaurant;
import com.happysat.repository.IngredientCategoryRepository;
import com.happysat.repository.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImp implements IngredientsService{

    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {

        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);

        return ingredientCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> opt = ingredientCategoryRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Ingredient category not found");
        }

        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingredientCategoryRepository.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category = findIngredientCategoryById(categoryId);

        IngredientsItem ingredientsItem = new IngredientsItem();
        ingredientsItem.setName(ingredientName);
        ingredientsItem.setRestaurant(restaurant);
        ingredientsItem.setCategory(category);

        IngredientsItem ingredient = ingredientItemRepository.save(ingredientsItem);
        category.getIngredients().add(ingredient);
        return ingredient;
    }

    @Override
    public List<IngredientsItem> findRestaurantsIngredients(Long restaurantId) throws Exception {
        restaurantService.findRestaurantById(restaurantId);
        return ingredientItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> opt = ingredientItemRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Ingredient not found");
        }
        IngredientsItem ingredientsItem = opt.get();
        ingredientsItem.setInStoke(!ingredientsItem.isInStoke());
        return ingredientItemRepository.save(ingredientsItem);
    }
}

package com.happysat.repository;

import com.happysat.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem, Long> {
}

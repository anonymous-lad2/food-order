package com.happysat.repository;

import com.happysat.model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientCategoryRepository extends JpaRepository<IngredientCategory, Long> {
}

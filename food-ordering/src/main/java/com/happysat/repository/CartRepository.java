package com.happysat.repository;

import com.happysat.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {

    Cart findByCustomerId(Long userId);
}

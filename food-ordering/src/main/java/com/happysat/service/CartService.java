package com.happysat.service;

import com.happysat.model.Cart;
import com.happysat.model.CartItem;
import com.happysat.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest res, String jwt) throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception;

    public Long calculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;
}

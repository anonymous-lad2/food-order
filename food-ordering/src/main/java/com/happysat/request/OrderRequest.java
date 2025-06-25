package com.happysat.request;

import com.happysat.model.Address;
import lombok.Data;

@Data
public class OrderRequest {

    private Long restaurantId;

    private Address deiveryAddress;
}

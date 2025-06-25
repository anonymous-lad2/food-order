package com.happysat.request;

import com.happysat.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {

    private Long id;

    private String name;

    private String description;

    private String cuisineType;

    private String address;

    private ContactInformation contactInformation;

    private String openingHours;

    private List<String> images;
}

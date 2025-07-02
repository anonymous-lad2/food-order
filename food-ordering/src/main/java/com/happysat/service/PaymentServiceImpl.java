package com.happysat.service;

import com.happysat.model.Order;
import com.happysat.response.PaymentResponse;
import org.springframework.beans.factory.annotation.Value;

public class PaymentServiceImpl implements PaymentService{

    @Value("${strip.api.key}")
    private String stripeSecretKey;

    @Override
    public PaymentResponse createPaymentLink(Order order) {
        return null;
    }
}

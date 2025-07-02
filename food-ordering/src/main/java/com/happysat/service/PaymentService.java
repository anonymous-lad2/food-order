package com.happysat.service;

import com.happysat.model.Order;
import com.happysat.response.PaymentResponse;

public interface PaymentService  {

    public PaymentResponse createPaymentLink(Order order);
}

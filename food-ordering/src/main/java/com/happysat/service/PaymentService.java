package com.happysat.service;

import com.happysat.model.Order;
import com.happysat.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService  {

    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}

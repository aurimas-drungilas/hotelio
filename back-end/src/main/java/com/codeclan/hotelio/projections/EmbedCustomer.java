package com.codeclan.hotelio.projections;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Customer;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCustomer", types = Customer.class)
public interface EmbedCustomer {
    long getId();
    String getFirstName();
    String getLastName();
    int getAge();
    List<Booking> getBookings();
}

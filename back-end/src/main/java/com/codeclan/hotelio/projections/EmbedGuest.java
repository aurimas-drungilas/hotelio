package com.codeclan.hotelio.projections;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Guest;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedGuest", types = Guest.class)
public interface EmbedGuest {
    long getId();
    String getFirstName();
    String getLastName();
    int getAge();
    List<Booking> getBookings();
}

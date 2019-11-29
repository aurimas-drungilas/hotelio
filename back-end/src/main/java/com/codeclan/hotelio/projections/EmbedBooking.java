package com.codeclan.hotelio.projections;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Customer;
import com.codeclan.hotelio.models.Room;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCustomer", types = Booking.class)
public interface EmbedBooking {
    long getId();
    String getStartDate();
    String getEndDate();
    int getNumberOfPeople();
    Customer getCustomer();
    List<Room> getRooms();
}

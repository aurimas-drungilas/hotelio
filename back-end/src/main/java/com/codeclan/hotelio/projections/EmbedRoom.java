package com.codeclan.hotelio.projections;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Room;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedRoom", types = Room.class)
public interface EmbedRoom {
    long getId();
    int getRoomNumber();
    int getCapacity();
    List<Booking> getBookings();
}

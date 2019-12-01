package com.codeclan.hotelio.components;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Guest;
import com.codeclan.hotelio.models.Room;
import com.codeclan.hotelio.repositories.BookingRepository;
import com.codeclan.hotelio.repositories.GuestRepository;
import com.codeclan.hotelio.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    GuestRepository customerRepository;
    @Autowired
    RoomRepository roomRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Room room404 = new Room(404, 2);
        roomRepository.save(room404);

        Room room405 = new Room(405, 2);
        roomRepository.save(room405);

        Room room406 = new Room(406, 2);
        roomRepository.save(room406);

        Room room407 = new Room(407, 4);
        roomRepository.save(room407);

        Guest guestNiall = new Guest("Niall", "Morris", 26);
        customerRepository.save(guestNiall);

        Guest guestJordan = new Guest("Jordan", "Davidson", 29);
        customerRepository.save(guestJordan);

        // Make rooms array
        List<Room> booking1_rooms= new ArrayList<Room>();
        booking1_rooms.add(room404);
        booking1_rooms.add(room405);
        // Make start and end dates
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); // Docs: http://tutorials.jenkov.com/java-date-time/parsing-formatting-dates.html
        Date booking1_startDate = format.parse ("2019-11-21");
        Date booking1_endDate = format.parse ("2019-11-27");
        // Make a new booking
        Booking booking1 = new Booking(booking1_startDate, booking1_endDate, 1, guestNiall, booking1_rooms);
        bookingRepository.save(booking1);
    }
}

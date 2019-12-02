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
        Room room400 = new Room(400, 2);
        roomRepository.save(room400);

        Room room401 = new Room(401, 2);
        roomRepository.save(room401);

        Room room402 = new Room(402, 4);
        roomRepository.save(room402);

        Room room403 = new Room(403, 4);
        roomRepository.save(room403);

        Room room404 = new Room(404, 2);
        roomRepository.save(room404);

        Room room405 = new Room(405, 2);
        roomRepository.save(room405);

        Room room406 = new Room(406, 2);
        roomRepository.save(room406);

        Room room407 = new Room(407, 2);
        roomRepository.save(room407);

        Room room408 = new Room(408, 2);
        roomRepository.save(room408);

        Room room409 = new Room(409, 2);
        roomRepository.save(room409);

        Room room410 = new Room(410, 4);
        roomRepository.save(room410);

        Room room411 = new Room(411, 4);
        roomRepository.save(room411);

        Room room412 = new Room(412, 4);
        roomRepository.save(room412);

        Room room414 = new Room(414, 8);
        roomRepository.save(room414);

        Guest guestNiall = new Guest("Niall", "Morris", 26);
        customerRepository.save(guestNiall);

        Guest guestJordan = new Guest("Jordan", "Davidson", 29);
        customerRepository.save(guestJordan);

        Guest guestSteve = new Guest("Steve", "Meiklejohn", 35);
        customerRepository.save(guestSteve);

        Guest guestAurimas = new Guest("Aurimas", "Drungilas", 29);
        customerRepository.save(guestAurimas);

        Guest guestSarah = new Guest("Sarah", "Grant", 25);
        customerRepository.save(guestSarah);

        Guest guestKevin = new Guest("Kevin", "McDermott", 29);
        customerRepository.save(guestKevin);


        // MAKE A BOOKING
        // Make rooms array
        List<Room> booking1_rooms= new ArrayList<Room>();
        booking1_rooms.add(room404);
        booking1_rooms.add(room405);
        // Make start and end dates
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); // Docs: http://tutorials.jenkov.com/java-date-time/parsing-formatting-dates.html
        Date booking1_startDate = format.parse ("2019-11-21");
        Date booking1_endDate = format.parse ("2019-12-04");
        // Make a new booking
        Booking booking1 = new Booking(booking1_startDate, booking1_endDate, 1, guestNiall, booking1_rooms);
        bookingRepository.save(booking1);


        // MAKE A BOOKING
        // Make rooms array
        List<Room> booking2_rooms= new ArrayList<Room>();
        booking2_rooms.add(room408);
        // Make start and end dates
        Date booking2_startDate = format.parse ("2019-12-03");
        Date booking2_endDate = format.parse ("2019-12-08");
        // Make a new booking
        Booking booking2 = new Booking(booking2_startDate, booking2_endDate, 1, guestSteve, booking2_rooms);
        bookingRepository.save(booking2);


        // MAKE A BOOKING
        // Make rooms array
        List<Room> booking3_rooms= new ArrayList<Room>();
        booking3_rooms.add(room402);
        // Make start and end dates
        Date booking3_startDate = format.parse ("2019-12-08");
        Date booking3_endDate = format.parse ("2019-12-12");
        // Make a new booking
        Booking booking3 = new Booking(booking3_startDate, booking3_endDate, 4, guestSarah, booking3_rooms);
        bookingRepository.save(booking3);
    }
}

package com.codeclan.hotelio;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.models.Guest;
import com.codeclan.hotelio.models.Room;
import com.codeclan.hotelio.repositories.BookingRepository;
import com.codeclan.hotelio.repositories.GuestRepository;
import com.codeclan.hotelio.repositories.RoomRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class HotelioApplicationTests {
	@Autowired
	RoomRepository roomRepository;
	@Autowired
	GuestRepository guestRepository;
	@Autowired
	BookingRepository bookingRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canCreateNewRoom() {
		int initialRoomsCount = roomRepository.findAll().size();
		Room room501 = new Room(501, 2);
		roomRepository.save(room501);
		assertEquals(initialRoomsCount + 1, roomRepository.findAll().size());
	}

	@Test
	void canCreateNewGuest() {
		int initialGuestsCount = guestRepository.findAll().size();
		Guest guestPeter = new Guest("Peter", "Pan", 17);
		guestRepository.save(guestPeter);
		assertEquals(initialGuestsCount + 1, guestRepository.findAll().size());
	}

	@Test
	void canCreateNewBooking() throws ParseException {
		// Store the initial bookings count
		int initialBookingsCount = bookingRepository.findAll().size();
		// Make a room
		Room room501 = new Room(501, 2);
		roomRepository.save(room501);
		// Store the room in a list
		List<Room> booking1_rooms= new ArrayList<Room>();
		booking1_rooms.add(room501);
		// Make a guest
		Guest guestPeter = new Guest("Peter", "Pan", 17);
		guestRepository.save(guestPeter);
		// Make start and end dates
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date booking1_startDate = format.parse("2019-11-21");
		Date booking1_endDate = format.parse("2019-11-27");
		// Make a booking
		Booking booking1 = new Booking(booking1_startDate, booking1_endDate, 1, guestPeter, booking1_rooms);
		bookingRepository.save(booking1);
		// Assert
		assertEquals(initialBookingsCount + 1, bookingRepository.findAll().size());
	}
}

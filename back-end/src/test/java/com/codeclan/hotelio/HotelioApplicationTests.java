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

import java.util.ArrayList;
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
	void canCreateNewBooking() {
		int initialBookingsCount = bookingRepository.findAll().size();
		Room room501 = new Room(501, 2);
		roomRepository.save(room501);
		Guest guestPeter = new Guest("Peter", "Pan", 17);
		guestRepository.save(guestPeter);
		List<Room> booking1_rooms= new ArrayList<Room>();
		booking1_rooms.add(room501);
		Booking booking1 = new Booking("21/11/2019", "27/11/2019", 1, guestPeter, booking1_rooms);
		bookingRepository.save(booking1);
		assertEquals(initialBookingsCount + 1, bookingRepository.findAll().size());
	}
}

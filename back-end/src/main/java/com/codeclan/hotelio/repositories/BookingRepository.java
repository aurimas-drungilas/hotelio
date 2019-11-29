package com.codeclan.hotelio.repositories;

import com.codeclan.hotelio.models.Booking;
import com.codeclan.hotelio.projections.EmbedBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedBooking.class)
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

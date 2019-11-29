package com.codeclan.hotelio.repositories;

import com.codeclan.hotelio.models.Guest;
import com.codeclan.hotelio.projections.EmbedGuest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedGuest.class)
public interface GuestRepository extends JpaRepository<Guest, Long> {
}

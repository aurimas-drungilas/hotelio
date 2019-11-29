package com.codeclan.hotelio.repositories;

import com.codeclan.hotelio.models.Room;
import com.codeclan.hotelio.projections.EmbedRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedRoom.class)
public interface RoomRepository extends JpaRepository<Room, Long> {
}

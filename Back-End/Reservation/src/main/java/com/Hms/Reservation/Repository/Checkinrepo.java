package com.Hms.Reservation.Repository;

import com.Hms.Reservation.models.Checkin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Checkinrepo extends MongoRepository<Checkin,Integer> {
}

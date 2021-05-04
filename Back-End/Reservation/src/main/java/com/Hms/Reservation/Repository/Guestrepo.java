package com.Hms.Reservation.Repository;

import com.Hms.Reservation.models.Guestdetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Guestrepo extends MongoRepository<Guestdetails,Integer> {
    List<Guestdetails> findByname(String firstname);
}

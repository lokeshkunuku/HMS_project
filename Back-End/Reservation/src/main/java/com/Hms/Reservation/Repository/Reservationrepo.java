package com.Hms.Reservation.Repository;

import com.Hms.Reservation.models.Reservationdetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Reservationrepo extends MongoRepository<Reservationdetails,Integer > {

    List<Reservationdetails> findByguestname(String firstname);
}

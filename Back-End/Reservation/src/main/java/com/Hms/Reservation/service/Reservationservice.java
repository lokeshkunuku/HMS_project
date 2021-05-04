package com.Hms.Reservation.service;
import com.Hms.Reservation.models.Reservationdetails;
import com.Hms.Reservation.Repository.Reservationrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Reservationservice {

    @Autowired
    private Reservationrepo reservationrepo;

    public List<Reservationdetails> findAllreservations() {
        return reservationrepo.findAll();
    }

    public Reservationdetails saveres(Reservationdetails reservationdetails) {
        return reservationrepo.insert(reservationdetails);

    }

    public void deleteresrvation(int id) {
        reservationrepo.deleteById(id);
    }

   public List<Reservationdetails> getresbyname(String firstname) {

        return reservationrepo.findByguestname(firstname);
    }
}

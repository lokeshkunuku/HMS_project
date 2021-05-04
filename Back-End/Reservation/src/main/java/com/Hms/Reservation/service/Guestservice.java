package com.Hms.Reservation.service;

import com.Hms.Reservation.models.Guestdetails;
import com.Hms.Reservation.Repository.Guestrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Guestservice {
    @Autowired
    private Guestrepo guestrepo;

    public List<Guestdetails> allguests() {
        return guestrepo.findAll();
    }

    public Guestdetails addguest(Guestdetails guestdetails) {
        return guestrepo.insert(guestdetails);
    }

    public Guestdetails editguest(Guestdetails guestdetails) {
        return guestrepo.save(guestdetails);
    }

    public void deleteguest(int id) {
        guestrepo.deleteById(id);
    }

    public List<Guestdetails> getByname(String firstname) {
        return guestrepo.findByname(firstname);
    }
    public Optional<Guestdetails> getguestid(int id){
        return guestrepo.findById(id);
    }
}

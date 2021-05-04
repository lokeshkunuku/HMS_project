package com.Hms.Reservation.Controllers;

import com.Hms.Reservation.service.Guestidservice;

import com.Hms.Reservation.Repository.Checkinrepo;
import com.Hms.Reservation.models.Checkin;
import com.Hms.Reservation.models.Guestdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/checkin")
public class Checkincon {
    @Autowired
    Checkinrepo checkinrepo;
    @Autowired
    private Guestidservice guestidservice;

    @GetMapping("/allcheckin")
    public List<Checkin> getchecksin(){
        return checkinrepo.findAll();
    }
    @GetMapping("/getcheckin/{id}")
    public Optional<Checkin> getguest(@PathVariable int id){
        return checkinrepo.findById(id);
    }
    @PostMapping("/addcheckin")
    public Checkin addCheckin(@RequestBody Checkin checkin){
        checkin.setId(guestidservice.getsequencenumber(Checkin.SEQUENCE_NAME));
        return checkinrepo.save(checkin);
    }
    @DeleteMapping("/delete/{id}")
    public void deletecheckin(@PathVariable int id){
        checkinrepo.deleteById(id);
    }
}

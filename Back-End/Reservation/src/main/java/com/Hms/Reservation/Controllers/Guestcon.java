package com.Hms.Reservation.Controllers;


import com.Hms.Reservation.service.Guestidservice;
import com.Hms.Reservation.service.Guestservice;
import com.Hms.Reservation.models.Guestdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/guest")
public class Guestcon {
    @Autowired
    private Guestservice guestservice;
    @Autowired
    private Guestidservice guestidservice;

    @GetMapping("/allguests")
    public List<Guestdetails> allGuests(){
        return guestservice.allguests();
    }
    @PostMapping("/addguest")
    public Guestdetails addGuest(@RequestBody Guestdetails guestdetails){
        guestdetails.setMemcode(guestidservice.getsequencenumber(Guestdetails.SEQUENCE_NAME));
        return guestservice.addguest(guestdetails);
    }
    @GetMapping("/getguest/{id}")
    public Optional<Guestdetails> getroom(@PathVariable int id){
        return guestservice.getguestid(id);
    }
    @PutMapping("/editguest")
    public Guestdetails editGuest(@RequestBody Guestdetails guestdetails){
        return guestservice.editguest(guestdetails);
    }
    @DeleteMapping("/deleteguest/{id}")
    public void deleteGuest(@PathVariable int id){
        guestservice.deleteguest(id);
    }
    @GetMapping("/name")
    public List<Guestdetails> guestbyname(@RequestParam (name="firstname" ) String  firstname){
        return guestservice.getByname(firstname);
    }

}

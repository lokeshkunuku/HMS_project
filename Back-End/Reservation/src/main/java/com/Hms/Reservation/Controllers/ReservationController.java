package com.Hms.Reservation.Controllers;
import com.Hms.Reservation.service.Reservationidservice;
import com.Hms.Reservation.service.Reservationservice;
import com.Hms.Reservation.models.Reservationdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private Reservationservice reservationservice ;
    @Autowired
    private Reservationidservice reservationidservice;


    @GetMapping("/getallres")
    public List<Reservationdetails> getallresdetails(){
        return reservationservice.findAllreservations();
    }

    @PostMapping("/saveres")
    public Reservationdetails saveresdetails(@RequestBody Reservationdetails reservationdetails){
        reservationdetails.setId(reservationidservice.getsequencenumber(Reservationdetails.SEQUENCE_NAME));
        return reservationservice.saveres(reservationdetails);
    }

    @DeleteMapping("/deleteres/{id}")
    public void deleteres(@PathVariable int id){
        reservationservice.deleteresrvation(id);
    }

    @GetMapping("/reservation")
    public List<Reservationdetails> getres(@RequestParam (name="firstname" ) String  firstname){
        return reservationservice.getresbyname(firstname);
    }

}

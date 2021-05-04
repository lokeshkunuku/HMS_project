package com.Hms.Roomdetails.controllers;

import com.Hms.Roomdetails.Services.Roomservice;
import com.Hms.Roomdetails.models.RoomServices;
import com.Hms.Roomdetails.models.Roomdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/Rooms")
public class Roomcon {
    @Autowired
    private Roomservice roomservice;

    @GetMapping("/allrooms")
    public List<Roomdetails> getrooms(){
        return roomservice.getallrooms();
    }
    @PostMapping("/addrooms")
    public  Roomdetails addroom(@RequestBody Roomdetails roomdetails){
        return roomservice.addrooms(roomdetails);
    }
    @PutMapping("/editroom")
    public Roomdetails editroom(@RequestBody Roomdetails roomdetails){
        return roomservice.editrooms(roomdetails);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteroom(@PathVariable String id){
        roomservice.deleteroombyid(id);

    }
    @GetMapping("/{id}")
    public Optional<Roomdetails> getroom(@PathVariable String id){
        return roomservice.getroombyid(id);
    }
    @GetMapping("/availrooms")
    public List<Roomdetails> getavailrooms(){
        return roomservice.availrooms(true);
    }



}

package com.Hms.Roomdetails.controllers;

import com.Hms.Roomdetails.Services.Roomservicesservice;
import com.Hms.Roomdetails.models.RoomServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/services")
public class Roomsercon {

    @Autowired
    private Roomservicesservice roomservicesservice;

    @GetMapping("/getservices")
    public List<RoomServices> getservices()
    {
        return roomservicesservice.getallservices();
    }

    @PostMapping("/addservice")
    public RoomServices addservice(@RequestBody RoomServices roomServices){
        return roomservicesservice.addService(roomServices);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteservice(@PathVariable String id){
        roomservicesservice.deleteservice(id);
    }


}

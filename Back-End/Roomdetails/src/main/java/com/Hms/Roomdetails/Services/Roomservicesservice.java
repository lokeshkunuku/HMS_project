package com.Hms.Roomdetails.Services;

import com.Hms.Roomdetails.models.RoomServices;
import com.Hms.Roomdetails.repositories.Roomservicerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Roomservicesservice {
    @Autowired
    private Roomservicerepo roomservicerepo;

    public List<RoomServices> getallservices() {
        return  roomservicerepo.findAll();
    }

    public RoomServices addService(RoomServices roomServices) {
        return roomservicerepo.save(roomServices);
    }

    public void deleteservice(String id) {
        roomservicerepo.deleteById(id);
    }

}

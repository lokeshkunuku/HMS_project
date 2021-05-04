package com.Hms.Roomdetails.Services;


import com.Hms.Roomdetails.models.Roomdetails;
import com.Hms.Roomdetails.repositories.Roomrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class Roomservice {

    @Autowired
    private Roomrepo roomrepo;

    public List<Roomdetails> getallrooms() {

        return roomrepo.findAll();
    }

    public Roomdetails addrooms(Roomdetails roomdetails) {
        return roomrepo.insert(roomdetails);
    }

    public Roomdetails editrooms(Roomdetails roomdetails) {
        return roomrepo.save(roomdetails);
    }


    public void deleteroombyid(String id) {
        roomrepo.deleteById(id);
    }

    public Optional<Roomdetails> getroombyid(String id) {
        return roomrepo.findById(id);
    }

    public List<Roomdetails> availrooms(boolean b) {
        return roomrepo.findByavailability(b);
    }
}

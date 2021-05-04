package com.Hms.Roomdetails.repositories;

import com.Hms.Roomdetails.models.Roomdetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface Roomrepo extends MongoRepository<Roomdetails,String> {
    List<Roomdetails> findByavailability(boolean b);
}

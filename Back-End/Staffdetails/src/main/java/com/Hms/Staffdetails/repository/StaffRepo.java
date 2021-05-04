package com.Hms.Staffdetails.repository;

import com.Hms.Staffdetails.models.Staffinfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StaffRepo extends MongoRepository<Staffinfo,Integer> {
    List<Staffinfo> findByemployeename(String firstname);

}

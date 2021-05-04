package com.Hms.Roomdetails.repositories;

import com.Hms.Roomdetails.models.RoomServices;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface Roomservicerepo extends MongoRepository<RoomServices,String> {
}

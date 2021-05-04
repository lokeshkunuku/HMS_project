package com.Hms.Reservation.service;
import com.Hms.Reservation.models.Guestid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class Guestidservice {
    @Autowired
    private MongoOperations mongoOperations;

    public int getsequencenumber(String sequenceName){
        Query query=new Query(Criteria.where("id").is(sequenceName));
       Update update = new Update().inc("seqno",1);
        Guestid counter= mongoOperations.findAndModify(query, update, options().returnNew(true).upsert(true), Guestid.class);
        return !Objects.isNull(counter)?counter.getSeqno():1;
}}

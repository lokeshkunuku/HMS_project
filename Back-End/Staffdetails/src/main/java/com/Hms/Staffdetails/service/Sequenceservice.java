package com.Hms.Staffdetails.service;
import com.Hms.Staffdetails.models.Staffidsequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

@Service
public class Sequenceservice {

    @Autowired
    private MongoOperations mongoOperations;

    public int getsequencenumber(String sequenceName){
        Query query=new Query(Criteria.where("id").is(sequenceName));
        Update update = new Update().inc("seqno",1);
        Staffidsequence counter= mongoOperations.findAndModify(query, update, options().returnNew(true).upsert(true), Staffidsequence.class);
       return !Objects.isNull(counter)?counter.getSeqno():1;

    }
}

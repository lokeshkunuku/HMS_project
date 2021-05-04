package com.Hms.Roomdetails.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "roomdetails")
public class Roomdetails {
    @Id
    private String roomno;
    private String type;
    private Boolean availability;
    private Integer price;

}

package com.Hms.Roomdetails.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "roomservice")
public class RoomServices {
    @Id
    private String id;
    private String number;
    private String roomservice;
}

package com.Hms.Reservation.models;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor

@Document(collection = "guestdetails")
public class Guestdetails {
    @Transient
    public static final String SEQUENCE_NAME ="guest_sequence";

    @Id
    private int memcode;
    private long phonenumber;
    private String company;
    private String name;
    private String email;
    private String gender;
    private String address;



}

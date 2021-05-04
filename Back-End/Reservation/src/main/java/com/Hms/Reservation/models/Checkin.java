
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
@Document(collection = "checkin")
public class Checkin {
    @Transient
    public static final String SEQUENCE_NAME ="checkin_sequence";
    @Id
    private int id;
    private String roomno;
    private String guestname;
    private Integer children;
    private int adults;
    private String checkin;
}

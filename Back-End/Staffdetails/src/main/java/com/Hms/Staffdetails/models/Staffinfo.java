package com.Hms.Staffdetails.models;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import java.lang.String;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "staffinfo")
public class Staffinfo {

    @Transient
    public static final String SEQUENCE_NAME ="user_sequence";

    @Id
    private int code;
    private String employeename;
    private String address;
    private int salary;
    private int age;
    private String occupation;
    private String email;


}

package com.Hms.Roomdetails;
import com.Hms.Roomdetails.models.Roomdetails;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertNotNull;
@SpringBootTest(classes = RoomdetailsApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class Roominfotest {

    @Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

    @Test
    public void contextLoads() {
    }
    @Test
    public void testRoomById() {
        Roomdetails roomdetails = restTemplate.getForObject(getRootUrl() + "/101)", Roomdetails.class);
        System.out.println(roomdetails.getType());
        assertNotNull(roomdetails);
    }

    @Test
    public void testGetAllRooms() {
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/Rooms/allrooms", HttpMethod.GET, entity, String.class);
        assertNotNull(response.getBody());
    }
    @Test
    public void Roomservice(){
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/services/getservices", HttpMethod.GET, entity, String.class);
        assertNotNull(response.getBody());
    }
}

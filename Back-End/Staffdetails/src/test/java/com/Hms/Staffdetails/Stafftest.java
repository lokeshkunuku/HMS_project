package com.Hms.Staffdetails;
import com.Hms.Staffdetails.models.Staffinfo;
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

@SpringBootTest(classes = StaffdetailsApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class Stafftest {
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
        public void testGetEmployeeById() {
            Staffinfo staffinfo = restTemplate.getForObject(getRootUrl() + "/getstaff/2)", Staffinfo.class);
            System.out.println(staffinfo.getEmployeename());
            assertNotNull(staffinfo);
           /* Employee employee = restTemplate.getForObject(getRootUrl() + "/employees/1", Employee.class);
            System.out.println(employee.getFirstName());
            assertNotNull(employee);*/
        }

            @Test
            public void testGetAllEmployees() {
                HttpHeaders headers = new HttpHeaders();
                HttpEntity<String> entity = new HttpEntity<String>(null, headers);
                ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/allstaff", HttpMethod.GET, entity, String.class);
                assertNotNull(response.getBody());
            }

    @Test
    public void testCreateEmployee() {
        Staffinfo staffinfo = new Staffinfo();
        staffinfo.setEmployeename("admin");
        staffinfo.setAddress("Ap");
        staffinfo.setSalary(12345);
        staffinfo.setAge(21);
        staffinfo.setOccupation("admin");
        staffinfo.setEmail("admin@gmail.com");
        ResponseEntity<Staffinfo> postResponse = restTemplate.postForEntity(getRootUrl() + "/addstaff", staffinfo, Staffinfo.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
    }
    @Test
    public void testUpdateEmployee() {
        int id = 2;
        Staffinfo employee = restTemplate.getForObject(getRootUrl() + "/editstaff" , Staffinfo.class);
        employee.setCode(id);
        employee.setEmployeename("admin1");
        restTemplate.put(getRootUrl() + "/editStaff", employee);
        Staffinfo updatedEmployee = restTemplate.getForObject(getRootUrl() + "/editstaff" , Staffinfo.class);
        assertNotNull(updatedEmployee);
    }
        }





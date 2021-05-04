package com.Hms.Staffdetails.controllers;

import com.Hms.Staffdetails.models.Staffinfo;
import com.Hms.Staffdetails.service.Sequenceservice;
import com.Hms.Staffdetails.service.Staffservice;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import java.lang.String;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/staff")
public class Staffcontroller {

    @Autowired
    private Staffservice staffservice;

    @Autowired
    private Sequenceservice sequenceservice;

     @GetMapping("/allstaff")
    public List<Staffinfo> getallstaff(){

        return staffservice.allstaff();


     }
     @PostMapping("/addstaff")
    public Staffinfo addstaff(@RequestBody Staffinfo staffinfo){
       staffinfo.setCode(sequenceservice.getsequencenumber(Staffinfo.SEQUENCE_NAME));
       return staffservice.addstaff(staffinfo);

     }
     @GetMapping("/getstaff/{id}")
     public Optional<Staffinfo> getstaff(@PathVariable(value = "id") int code )  {
        return staffservice.findstaff(code);

     }
     @PutMapping("/editstaff")
     public Staffinfo editstaff( @RequestBody Staffinfo staffdetails ){
         return staffservice.editstaff(staffdetails);

     }
     @DeleteMapping("/deletestaff/{id}")
    public void deletestaff(@PathVariable int id){
         staffservice.deletestaff(id);
     }
    /* @GetMapping("/page")
     public Map<String,Object> getstaffinpage(@RequestParam (name="pageno" ,defaultValue = 0) int pageno ,
                                              @RequestParam (name="pagesize" ,defaultValue = 5) int pagesize ,
                                              @RequestParam (name="sortby" ,defaultValue = "id") String sortby
     ){
         return staffservice.getstaffbypage(pageno,pagesize,sortby);

     }*/
   @GetMapping("/firstname")
    public List<Staffinfo> getstaffbyname(@RequestParam (name="firstname" ) String  firstname){
      return staffservice.getstaffname(firstname);
    }



}

package com.Hms.Staffdetails.service;
import com.Hms.Staffdetails.exceptions.ResourceNotFoundException;
import com.Hms.Staffdetails.models.Staffinfo;
import com.Hms.Staffdetails.repository.StaffRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class Staffservice {
    @Autowired
    private StaffRepo staffRepo;
    public List<Staffinfo> allstaff() {
        return staffRepo.findAll();

    }
    public Staffinfo addstaff(Staffinfo staffinfo) {
        return staffRepo.insert(staffinfo);
    }

    public Staffinfo editstaff(Staffinfo staffinfo) {
           return staffRepo.save(staffinfo);
     }

    public void deletestaff(int id) {
        staffRepo.deleteById(id);

    }

    public Optional<Staffinfo> findstaff(int code) {
        return staffRepo.findById(code);


    }

    public List<Staffinfo> getstaffname(String firstname) {
        return staffRepo.findByemployeename(firstname);
    }







   /* public Map<String, Object> getstaffbypage(int pageno, int pagesize, String sortby) {
        Map<String,Object> respone = new HashMap<String,Object>();
        Sort sort =Sort.by(sortby);
        PageRequest page = PageRequest.of(pageno,pagesize,sort);
        Page<Staffinfo>
        respone.put("data",value);
        return respone;
    }*/

}

package hs.aalen.Holidaywish;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class HolidaywishService {
@Autowired
    private HolidaywishRepository holidaywishrepository;

     public List<Holidaywish> getHolidaywishList() {
            ArrayList<Holidaywish> mylist = new ArrayList<>();
            Iterator<Holidaywish> it = holidaywishrepository.findAll().iterator();
            while (it.hasNext())
                mylist.add(it.next());
            return mylist;

     }

    public Holidaywish getHolidaywish(String description) {
        return holidaywishrepository.findById(description).orElse(null);
    }

    public void addHolidaywish(Holidaywish holidaywish) {
        holidaywishrepository.save(holidaywish);

    }

    public void updateHolidaywish(String description, Holidaywish holidaywish) {
        holidaywishrepository.save(holidaywish);

    }

    public void deleteHolidaywish(String description) {
        holidaywishrepository.deleteById(description);

    }


}
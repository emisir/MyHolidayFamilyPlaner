package hs.aalen.Holiday;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class HolidayService {
@Autowired
    private HolidayRepository holidayrepository;

     public List<Holiday> getHolidayList() {
            ArrayList<Holiday> mylist = new ArrayList<>();
            Iterator<Holiday> it = holidayrepository.findAll().iterator();
            while (it.hasNext())
                mylist.add(it.next());
            return mylist;

    }

    public Holiday getHoliday(String id) {
        return holidayrepository.findById(id).orElse(null);
    }

    public void addHoliday(Holiday holiday) {
        holidayrepository.save(holiday);


    }

    public void updateHoliday(String id, Holiday holiday) {
        holidayrepository.save(holiday);


    }

    public void deleteHoliday(String id) {
        holidayrepository.deleteById(id);

    }





}
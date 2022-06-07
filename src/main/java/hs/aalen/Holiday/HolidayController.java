package hs.aalen.Holiday;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolidayController {
    @Autowired
    HolidayService holidayservice;
    @RequestMapping("/holiday")
    public List<Holiday> getHolidayList(){
        return holidayservice.getHolidayList();
    }



    @RequestMapping("/holiday/{id}")
    public Holiday getHoliday(@PathVariable String id) {
        return holidayservice.getHoliday(id);

    }
    @RequestMapping(method = RequestMethod.POST, value="/holiday")
    public void addHoliday (@RequestBody Holiday holiday) {
        holidayservice.addHoliday(holiday);

    }
    @RequestMapping(method = RequestMethod.PUT, value="/holiday/{id}" )
    public void updateHoliday (@PathVariable String id, @RequestBody Holiday holiday) {
        holidayservice.updateHoliday(id,holiday);
    }
    @RequestMapping(method = RequestMethod.DELETE, value="/holiday/{id}" )
    public void deleteHoliday (@PathVariable String id) {
        holidayservice.deleteHoliday(id);
    }}
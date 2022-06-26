package hs.aalen.Holidaywish;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HolidayWishController {

    @Autowired
    HolidayWishService holidaywishservice;

    @RequestMapping("/holiday-wish")
    public List<HolidayWish> getHolidaywishList() {
        return holidaywishservice.getHolidayWishList();
    }

    @RequestMapping("/holiday-wish/{id}")
    public HolidayWish getHolidaywish(@PathVariable Long id) {
        return holidaywishservice.getHolidayWish(id);

    }

    @RequestMapping(method = RequestMethod.POST, value = "/holiday-wish")
    public void addHolidaywish(@RequestBody HolidayWish holidayWish) {
        holidaywishservice.addHolidayWish(holidayWish);

    }

    @RequestMapping(method = RequestMethod.PUT, value = "/holiday-wish/{id}")
    public void updateHolidaywish(@PathVariable Long id, @RequestBody HolidayWish holidayWish) {
        holidaywishservice.updateHolidayWish(id, holidayWish);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/holiday-wish/{id}")
    public void deleteHolidaywish(@PathVariable Long id) {
        holidaywishservice.deleteHolidayWish(id);
    }
}
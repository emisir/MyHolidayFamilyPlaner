package hs.aalen.Holidaywish;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController


public class HolidaywishController {

    @Autowired
    HolidaywishService holidaywishservice;
    @RequestMapping("/holidaywish")
    public List<Holidaywish> getHolidaywishList() {
    return holidaywishservice.getHolidaywishList();
    }

    @RequestMapping("/holidaywish/{description}")
    public Holidaywish getHolidaywish(@PathVariable String description) {
        return holidaywishservice.getHolidaywish(description);

    }
    @RequestMapping(method = RequestMethod.POST, value="/holidaywish" )
    public void addHolidaywish (@RequestBody Holidaywish holidaywish) {
        holidaywishservice.addHolidaywish(holidaywish);

    }
    @RequestMapping(method = RequestMethod.PUT, value="/holidaywish/{description}" )
    public void updateHolidaywish (@PathVariable String description, @RequestBody Holidaywish holidaywish) {
        holidaywishservice.updateHolidaywish(description,holidaywish);
    }
    @RequestMapping(method = RequestMethod.DELETE, value="/holidaywish/{description}" )
    public void deleteHolidaywish (@PathVariable String description,@RequestBody Holidaywish holidaywish ) {
        holidaywishservice.deleteHolidaywish(description);
    }}
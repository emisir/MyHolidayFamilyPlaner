package hs.aalen.Holiday;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hs.aalen.Holidaywish.HolidayWish;

@RestController
public class HolidayController {
	@Autowired
	HolidayService holidayservice;
	
	//show all holiday
	@RequestMapping("/holiday")
	public List<Holiday> getHolidayList() {
		return holidayservice.getHolidayList();
	}
	//show holiday by id
	@RequestMapping("/holiday/{id}")
	public Holiday getHoliday(@PathVariable Long id) {
		return holidayservice.getHoliday(id);
	}
	//add holiday
	@RequestMapping(method = RequestMethod.POST, value = "/holiday")
	public void addHoliday(@RequestBody Holiday holiday) {
		holidayservice.addHoliday(holiday);
	}
	//update holiday
	@RequestMapping(method = RequestMethod.PUT, value = "/holiday/{id}")
	public void updateHoliday(@PathVariable Long id, @RequestBody Holiday holiday) {
		holidayservice.updateHoliday(id, holiday);
	}
	//save holiday
	@RequestMapping(method = RequestMethod.POST, value = "/holiday/{id}/holiday-wish")
	public void saveHolidayWishById(@PathVariable Long id, @RequestBody HolidayWish holidayWish) {
		holidayservice.saveHolidayWishById(id, holidayWish);
	}
	
	//delete familymember
	@RequestMapping(method = RequestMethod.DELETE, value = "/holiday/{id}")
	public void deleteHoliday(@PathVariable Long id) {
		holidayservice.deleteHoliday(id);
	}
}
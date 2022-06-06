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
	@RequestMapping("/Holiday")
	public List<Holiday> getHolidayList(){
		return holidayservice.getHolidayList();
	}
	@RequestMapping("/Holiday/{id}")
	public Holiday getHoliday(@PathVariable Long id) {
		return holidayservice.getHolidayList(id);

	}
	@RequestMapping(method = RequestMethod.POST, value="/Holiday/{id}" )
	public void addHoliday (@RequestBody Holiday holiday) {
		holidayservice.addHoliday(holiday);

	}
	@RequestMapping(method = RequestMethod.PUT, value="/Holiday/{id}" )
	public void updateHoliday (@PathVariable Long id, @RequestBody Holiday holiday) {
		holidayservice.updateHoliday(id, holiday);
}
	@RequestMapping(method = RequestMethod.DELETE, value="/Holiday/{id}" )
	public void deleteHoliday (@PathVariable Long id,@RequestBody Holiday holiday) {
		holidayservice.deleteHoliday(id,holiday);	


		
}}


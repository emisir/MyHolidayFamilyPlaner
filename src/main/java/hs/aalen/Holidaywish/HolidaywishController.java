package hs.aalen.Holidaywish;

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
	
	@RequestMapping("/holidaywish/{id}")
	public Holidaywish getholidaywish(@PathVariable String description) {
		return holidaywishservice.getHolidaywishList(description);

	}
	@RequestMapping(method = RequestMethod.POST, value="/holidaywish/{id}" )
	public void addholidaywish (@RequestBody Holidaywish holidaywish) {
		holidaywishservice.addHolidaywish(holidaywish);

	}
	@RequestMapping(method = RequestMethod.PUT, value="/holidaywish/{id}" )
	public void updateholidaywish (@PathVariable String description, @RequestBody Holidaywish holidaywish) {
		holidaywishservice.updateHolidaywish(description,holidaywish);
	}
	@RequestMapping(method = RequestMethod.DELETE, value="/holidaywish/{id}" )
	public void deleteholidaywish (@PathVariable String description,@RequestBody Holidaywish holidaywish ) {
		holidaywishservice.deleteHolidaywish(description,holidaywish);	
	}}

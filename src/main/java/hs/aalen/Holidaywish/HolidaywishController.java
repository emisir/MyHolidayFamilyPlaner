package hs.aalen.Holidaywish;

import org.springframework.web.bind.annotation.RestController;

@RestController

public class HolidayWishController {

//	@Autowired
//	HolidayWishService holidaywishservice;
//
//	@RequestMapping("/holiday-wish")
//	public List<HolidayWish> getHolidaywishList() {
//		return holidaywishservice.getHolidayWishList();
//	}
//
//	@RequestMapping("/holiday-wish/{description}")
//	public HolidayWish getHolidaywish(@PathVariable Long id) {
//		return holidaywishservice.getHolidayWish(id);
//
//	}
//
//	@RequestMapping(method = RequestMethod.POST, value = "/holiday-wish")
//	public void addHolidaywish(@RequestBody HolidayWish holidaywish) {
//		holidaywishservice.addHolidayWish(holidaywish);
//
//	}
//
//	@RequestMapping(method = RequestMethod.PUT, value = "/holiday-wish/{description}")
//	public void updateHolidaywish(@PathVariable String description, @RequestBody HolidayWish holidaywish) {
//		holidaywishservice.updateHolidayWish(description, holidaywish);
//	}
//
//	@RequestMapping(method = RequestMethod.DELETE, value = "/holiday-wish/{description}")
//	public void deleteHolidaywish(@PathVariable String description, @RequestBody HolidayWish holidaywish) {
//		holidaywishservice.deleteHolidayWish(description);
//	}
}
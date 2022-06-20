package hs.aalen.Holidaywish;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HolidayWishService {
	@Autowired
	private HolidayWishRepository holidayWishRepository;

	public HolidayWishRepository getHolidayWishRepository() {
		return holidayWishRepository;
	}

	public void setHolidayWishRepository(HolidayWishRepository holidayWishRepository) {
		this.holidayWishRepository = holidayWishRepository;
	}

}
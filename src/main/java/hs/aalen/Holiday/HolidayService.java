package hs.aalen.Holiday;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hs.aalen.Holidaywish.HolidayWish;
import hs.aalen.Holidaywish.HolidayWishRepository;
import hs.aalen.prio.Prio;

@Service
public class HolidayService {
	@Autowired
	private HolidayRepository holidayRepository;

	@Autowired
	private HolidayWishRepository holidayWishRepository;

	// show holiday + linked holidaywish
	public List<Holiday> getHolidayList() {
		List<Holiday> holidays = holidayRepository.findAll();
		for (Holiday holiday : holidays) {
			for (HolidayWish wish : holiday.getWishes()) {
				this.calculatePrioritySum(wish);
			}
		}
		return holidays;
	}

	public Holiday getHoliday(Long id) {
		Holiday holiday = holidayRepository.findById(id).orElse(null);

		
		if (holiday != null) {
			for (HolidayWish wish : holiday.getWishes()) {
				this.calculatePrioritySum(wish);
			}
		}

		return holiday;
		
	}
	//holiday is to be found, then it links and stores the holiday wish. 
	public void saveHolidayWishById(Long holidayId, HolidayWish holidayWish) {
		Holiday holiday = holidayRepository.findById(holidayId).orElse(null);
		if (holiday != null) {
			holidayWish.setHoliday(holiday);
			holidayWishRepository.save(holidayWish);
		}
	}
 
	//add holiday
	public void addHoliday(Holiday holiday) {
		holidayRepository.save(holiday);
	}

	//update holiday
	public void updateHoliday(Long id, Holiday holiday) {
		holidayRepository.save(holiday);
	}
    //delete + if holiday is deleted holidaywish can be deleted
	public void deleteHoliday(Long id) {
		Holiday holiday = this.holidayRepository.findById(id).orElse(null);
		List<HolidayWish> holidayWishes = holiday.getWishes();
		for (int i = 0; i < holidayWishes.size(); i++) {
			holidayWishRepository.delete(holidayWishes.get(i));
		}	
		holidayRepository.deleteById(id);
	}
 
	
	//prio added together
	private void calculatePrioritySum(HolidayWish holidayWish) {
		int sum = 0;
		for (Prio prio : holidayWish.getPriorities()) {
			sum = sum + prio.getPriority();
		}
		holidayWish.setSumPriority(sum);
	}

}
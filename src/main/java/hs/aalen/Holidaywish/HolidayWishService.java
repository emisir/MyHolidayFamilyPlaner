package hs.aalen.Holidaywish;

import java.util.List;

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

    public List<HolidayWish> getHolidayWishList() {
        return holidayWishRepository.findAll();
    }
 

    public HolidayWish getHolidayWish(Long id) {
        return holidayWishRepository.findById(id).orElse(null);
    }

    public void addHolidayWish(HolidayWish holidayWish) {
        holidayWishRepository.save(holidayWish);
    }

    public void updateHolidayWish(Long id, HolidayWish holidayWish) {
        holidayWishRepository.save(holidayWish);
    }

    public void deleteHolidayWish(Long id) {
        holidayWishRepository.deleteById(id);
    }



}
package hs.aalen.Holidaywish;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface HolidayWishRepository extends CrudRepository<HolidayWish, Long> {

    List<HolidayWish> findAll();

}
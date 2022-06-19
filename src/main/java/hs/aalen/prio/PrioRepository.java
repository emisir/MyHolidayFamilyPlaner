package hs.aalen.prio;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PrioRepository extends CrudRepository<Prio, Long> {

	List<Prio> findAll();

	Prio findByFamilyMemberIdAndHolidayWishId(Long familyMemberId, Long holidayWishId);

}

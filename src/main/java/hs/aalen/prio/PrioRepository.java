package hs.aalen.prio;

import java.util.List;

// extends from CrudRepository
import org.springframework.data.repository.CrudRepository;

public interface PrioRepository extends CrudRepository<Prio, Long> {

	List<Prio> findAll();
 
	// find prio by familymember id und holiday id
	Prio findByFamilyMemberIdAndHolidayWishId(Long familyMemberId, Long holidayWishId);

}

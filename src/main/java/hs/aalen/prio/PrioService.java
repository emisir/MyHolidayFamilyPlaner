package hs.aalen.prio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrioService {
	@Autowired
	private PrioRepository prioRepository;

	public List<Prio> getPrioList() {
		return prioRepository.findAll();
	}

	public Prio getPrio(Long id) {
		return prioRepository.findById(id).orElse(null);
	}
	
	//Prioritization has taken place and if a family member has already prioritized a vacation request,
	//the priority will be overwritten, otherwise if none has taken place, a new one will be set.
	public void addPrio(Prio prio) {
		Prio foundEntry = prioRepository.findByFamilyMemberIdAndHolidayWishId(prio.getFamilyMember().getId(),
				prio.getHolidayWish().getId());

		
		if (foundEntry != null) {
			foundEntry.setPriority(prio.getPriority());
			prioRepository.save(foundEntry);
		} else {
			prioRepository.save(prio);
		}
	}

	public void updatePrio(Long id, Prio prio) {
		prioRepository.save(prio);
	}

	public void deletePrio(Long id) {
		prioRepository.deleteById(id);
	}
}

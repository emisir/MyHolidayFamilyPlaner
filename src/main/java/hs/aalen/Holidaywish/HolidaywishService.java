package hs.aalen.Holidaywish;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

@Service


public class HolidaywishService {

	private HolidaywishRepository holidaywishrepository;
	
	 public List<Holidaywish> getHolidaywishList() {
	        ArrayList<Holidaywish> mylist1 = new ArrayList<>();
	        Iterator<Holidaywish> it = holidaywishrepository.findAll().iterator();
	        while (it.hasNext())
	            mylist1.add(it.next());
	        return mylist1;

	 }

	public Holidaywish getHolidaywishList(String description) {
		return holidaywishrepository.findById(description).orElse(null);
	}

	public void addHolidaywish(Holidaywish holidaywish) {
		holidaywishrepository.save(holidaywish);
		
	}

	public void updateHolidaywish(String description, Holidaywish holidaywish) {
		holidaywishrepository.save(holidaywish);
		
	}

	public void deleteHolidaywish(String description, Holidaywish holidaywish) {
		holidaywishrepository.deleteById(description);
		
	}

}

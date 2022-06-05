package hs.aalen.Holiday;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;
@Service

public class HolidayService {
	private HolidayRepository holidayrepository;
	
	 public List<Holiday> getHolidayList(){
	        ArrayList<Holiday> mylist = new ArrayList<>();
	        Iterator<Holiday> it = holidayrepository.findAll().iterator();
	        while (it.hasNext())
	            mylist.add(it.next());
	        return mylist;
	 }

	   public Holiday getHolidayList(long id) {
	        return holidayrepository.findById(id).orElse(null);
	    }

		public void addHoliday(Holiday holiday) {
			holidayrepository.save(holiday);
			
		}

		  public void updateHoliday(long id, Holiday holiday) {
		        holidayrepository.save(holiday);


		    }

		    public void deleteHoliday(long id, Holiday holiday) {
		        holidayrepository.deleteById(id);

		    }

}

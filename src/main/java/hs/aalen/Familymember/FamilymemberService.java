package hs.aalen.Familymember;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service


public class FamilymemberService {

	
	private FamilymemberRepository familymemberrepository;
	
	 public List<Familymember> getFamilymemberList() {
	        ArrayList<Familymember> mylist = new ArrayList<>();
	        Iterator<Familymember> it = familymemberrepository.findAll().iterator();
	        while (it.hasNext())
	            mylist.add(it.next());
	        return mylist;
	 }


	public Familymember getFamilymemberList(String id) {
        return familymemberrepository.findById(id).orElse(null);
	}

	public void addFamilymember(Familymember familymember) {
		familymemberrepository.save(familymember);
		
	}

	public void updateFamilymember(String id, Familymember familymember) {
		familymemberrepository.save(familymember);
		
	}

	public void deleteFamilymember(String id, Familymember familymember) {
		familymemberrepository.deleteById(id);
		
	}

}

package hs.aalen.Familymember;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilymemberService {
@Autowired
private FamilymemberRepository familymemberRepository;
public List<Familymember> getFamilymemberList() {
ArrayList<Familymember> mylist= new ArrayList<>();
Iterator<Familymember> it = familymemberRepository.findAll().iterator();
while(it.hasNext())
mylist.add(it.next()); 
return mylist;
}
public Familymember getFamilymember(String id) {
return familymemberRepository.findById(id).orElse(null);
}
public void addFamilymember(Familymember familymember) {
    familymemberRepository.save(familymember);
}
public void updateFamilymember(String id, Familymember familymember) {
    familymemberRepository.save(familymember);
}
public void deleteFamilymember(String id) {
    familymemberRepository.deleteById(id);
}

    }
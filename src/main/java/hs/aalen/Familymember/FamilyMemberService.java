package hs.aalen.Familymember;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {
	//Objekte werden in familymemberRepository eingefuegt
	@Autowired
	private FamilyMemberRepository familyMemberRepository;

	//Familienmitglied als Liste ausgeben
	public List<FamilyMember> getFamilyMemberList() {
		return familyMemberRepository.findAll();
	}
	//Familienmitglied ausgeben
	public FamilyMember getFamilyMember(Long id) {
		return familyMemberRepository.findById(id).orElse(null);
	}
	//Familienmitglied hinzufügen
	public void addFamilyMember(FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}
    //Familienmitglied aktualisieren
	public void updateFamilyMember(Long id, FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}
    //Familienmitglied löschen
	public void deleteFamilyMember(Long id) {
		familyMemberRepository.deleteById(id);
	}

}
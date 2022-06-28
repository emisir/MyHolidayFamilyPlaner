package hs.aalen.Familymember;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {
	//Objects are inserted into familymemberRepository
	@Autowired
	private FamilyMemberRepository familyMemberRepository;

	//output familymember as list
	public List<FamilyMember> getFamilyMemberList() {
		return familyMemberRepository.findAll();
	}
	//show familymember
	public FamilyMember getFamilyMember(Long id) {
		return familyMemberRepository.findById(id).orElse(null);
	}
	//Add family member
	public void addFamilyMember(FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}
	//update family member
	public void updateFamilyMember(Long id, FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}
	//delete family member
	public void deleteFamilyMember(Long id) {
		familyMemberRepository.deleteById(id);
	}

}
package hs.aalen.Familymember;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyMemberService {
	@Autowired
	private FamilyMemberRepository familyMemberRepository;

	public List<FamilyMember> getFamilyMemberList() {
		return familyMemberRepository.findAll();
	}

	public FamilyMember getFamilyMember(Long id) {
		return familyMemberRepository.findById(id).orElse(null);
	}

	public void addFamilyMember(FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}

	public void updateFamilyMember(Long id, FamilyMember familyMember) {
		familyMemberRepository.save(familyMember);
	}

	public void deleteFamilyMember(Long id) {
		familyMemberRepository.deleteById(id);
	}

}
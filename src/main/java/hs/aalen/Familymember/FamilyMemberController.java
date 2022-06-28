package hs.aalen.Familymember;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController

public class FamilyMemberController {

	//objects inserted into familymemberservice	
	@Autowired
	FamilyMemberService familyMemberService;
	//show all family members
	@RequestMapping("/familymember")
	public List<FamilyMember> getFamilymemberList() {
		return familyMemberService.getFamilyMemberList();

	}
	//show all family members with id
	@RequestMapping("/familymember/{id}")
	public FamilyMember getFamilymember(@PathVariable Long id) {
		return familyMemberService.getFamilyMember(id);
	}
	//create familymember
	@RequestMapping(method = RequestMethod.POST, value = "/familymember")
	public void addFamilymember(@RequestBody FamilyMember familyMember) {
		familyMemberService.addFamilyMember(familyMember);
	}
	//edit familymember
	@RequestMapping(method = RequestMethod.PUT, value = "/familymember/{id}")
	public void updateFamilymember(@PathVariable Long id, @RequestBody FamilyMember familyMember) {
		familyMemberService.updateFamilyMember(id, familyMember);
	}
	//delete familymember
	@RequestMapping(method = RequestMethod.DELETE, value = "/familymember/{id}")
	public void deleteFamilymember(@PathVariable Long id) {
		familyMemberService.deleteFamilyMember(id);
	}
}
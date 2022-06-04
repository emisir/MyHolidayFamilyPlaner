package hs.aalen.Familymember;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class FamilymemberController {

	@Autowired
	FamilymemberService familymemberservice;
	@RequestMapping("/Familienmitglied")
	public List<Familymember> getFamilymemberList(){
		return familymemberservice.getFamilymemberList();
	}
	@RequestMapping("/Familienmitglied/{id}")
	public Familymember getFamilymember(@PathVariable String id) {
		return familymemberservice.getFamilymemberList(id);

	}
	@RequestMapping(method = RequestMethod.POST, value="/Familienmitglied/{id}" )
	public void addFamilymember (@RequestBody Familymember familymember) {
		familymemberservice.addFamilymember(familymember);

	}
	@RequestMapping(method = RequestMethod.PUT, value="/Familienmitglied/{id}" )
	public void updateFamilymember (@PathVariable String id, @RequestBody Familymember familymember) {
		familymemberservice.updateFamilymember(id, familymember);
}
	@RequestMapping(method = RequestMethod.DELETE, value="/Familienmitglied/{id}" )
	public void deleteFamilymember (@PathVariable String id,@RequestBody Familymember familymember) {
		familymemberservice.deleteFamilymember(id,familymember);	


		
}}

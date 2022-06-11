package hs.aalen.Familymember;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class FamilymemberController {

    @Autowired
    FamilymemberService familymemberService;
    @RequestMapping("/familymember")
    public List<Familymember> getFamilymemberList() {
    return familymemberService.getFamilymemberList();
    
    }
    @RequestMapping("/familymember/{id}")
    public Familymember getFamilymember(@PathVariable String id) {
    return familymemberService.getFamilymember(id);
    }
    @RequestMapping(method=RequestMethod.POST, value="/familymember") 
    public void addFamilymember(@RequestBody Familymember familymember) {
        familymemberService.addFamilymember(familymember);
    }
    @RequestMapping(method=RequestMethod.PUT, value="/familymember/{id}")
    public void updateFamilymember(@PathVariable String id, @RequestBody Familymember familymember) {
        familymemberService.updateFamilymember(id, familymember);
    }
    @RequestMapping(method=RequestMethod.DELETE, value="/familymember/{id}")
    public void deleteFamilymember(@PathVariable String id) {
        familymemberService.deleteFamilymember(id);
    }
    }
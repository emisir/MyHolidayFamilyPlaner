package hs.aalen.Holidaywish;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import hs.aalen.Familymember.Familymember;


@Entity
public class Holidaywish {

	@Id
    private String description;
    private String location;
    
 
    
    @ManyToMany
    private List<Familymember> familymemberprio;

    public Holidaywish() {
    }
    public Holidaywish(String description, String bday, String location) {
        super();
        this.description = description;
        this.location = location;
  
    }
    public String getdescription() {
        return description;
    }
    public void setdescription(String description) {
        this.description = description;
    }
    public String getlocation() {
        return location;
    }
    public void setlocation(String location) {
        this.location = location;
  	}
    
    public List<Familymember> getFamilymemberPrio(){
    	return familymemberprio;
    }
    public void setFamilymemberPrio(List<Familymember> familymemberprio) {
    	this.familymemberprio = familymemberprio;
    }
}
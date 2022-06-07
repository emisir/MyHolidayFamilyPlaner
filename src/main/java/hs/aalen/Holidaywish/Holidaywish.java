package hs.aalen.Holidaywish;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Holidaywish {
    @Id
    private String description;
    private String location;



    public Holidaywish() {
    }
    public Holidaywish(String description, String location) {
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
}
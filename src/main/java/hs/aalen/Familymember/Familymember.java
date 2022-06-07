package hs.aalen.Familymember;


import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Familymember {
@Id
    private String name;
    private String id;
    private String bday;



    public Familymember() {
    }

    public Familymember(String name, String id, String bday) {
        super();
        this.name = name;
        this.id = id;
        this.bday = bday;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBday() {
        return bday;
    }

    public void setBday(String bday) {
        this.bday = bday;


    }

}
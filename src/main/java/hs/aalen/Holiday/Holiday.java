package hs.aalen.Holiday;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Holiday {


		@Id
	    private Long id;
	    private Date time;
	    private String titel;

	    public Holiday() {
	    }

	    public Holiday(Long id, Date time, String titel) {
	        super();
	        this.id = id;
	        this.time= time;
	        this.titel=titel;
	   
	    }

	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public Date getTime() {
	        return time;
	    }

	    public void setTime(Date time) {
	        this.time= time;
	    }
	    
	    public String getTitel() {
	    	return titel;
	    }
	    
	    public void setTitel(String titel) {
	    	this.titel=titel;
	  
        }
	    
      
        }
	



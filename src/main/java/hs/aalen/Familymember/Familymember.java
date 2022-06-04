package hs.aalen.Familymember;

import java.util.Date;
import java.util.List;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import hs.aalen.Holidaywish.Holidaywish;


@Entity


public class Familymember {
	@Id
	private String name;
	private long id;
	private Date bday;
	

	@ManyToMany(mappedBy="prio")
	private List<Holidaywish> holidaywishprio;
		
	public Familymember() {
	}
	public Familymember(String name, long id, Date bday) {
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
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Date getBday() {
		return bday;
	}

	public void setBday(Date bday) {
		this.bday = bday;

	}
	public List<Holidaywish> setHolidaywishprio(){
		return holidaywishprio ;
		
	}
	 public void getHolidaywishprio(List<Holidaywish> holidaywishprio) {
		 this.holidaywishprio = holidaywishprio ;
	 }

}	




	
	


package hs.aalen.Familymember;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import hs.aalen.prio.Prio;

@Entity
public class FamilyMember {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private Date bday;

	@OneToMany(mappedBy = "familyMember", cascade=CascadeType.REMOVE)
	@JsonIgnore
	private List<Prio> priorities;

	public FamilyMember(Long id, String name, Date bday, List<Prio> priorities) {
		super();
		this.id = id;
		this.name = name;
		this.bday = bday;
		this.priorities = priorities;
	}

	public FamilyMember() {
	}

	public List<Prio> getPriorities() {
		return priorities;
	}

	public void setPriorities(List<Prio> priorities) {
		this.priorities = priorities;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBday() {
		return bday;
	}

	public void setBday(Date bday) {
		this.bday = bday;
	}

}
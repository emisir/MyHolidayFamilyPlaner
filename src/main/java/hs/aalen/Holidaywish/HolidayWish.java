package hs.aalen.Holidaywish;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import hs.aalen.Holiday.Holiday;
import hs.aalen.prio.Prio;

@Entity
public class HolidayWish {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String description;
	private String location;

	@ManyToOne
	@JsonIgnore
	private Holiday holiday;

	@OneToMany(mappedBy = "holidayWish")
	@JsonIgnore
	private List<Prio> priorities;

	@Transient
	private int sumPriority;

	public HolidayWish() {
	}

	public List<Prio> getPriorities() {
		return priorities;
	}

	public void setPriorities(List<Prio> priorities) {
		this.priorities = priorities;
	}

	public int getSumPriority() {
		return sumPriority;
	}

	public void setSumPriority(int sumPriority) {
		this.sumPriority = sumPriority;
	}

	public Holiday getHoliday() {
		return holiday;
	}

	public void setHoliday(Holiday holiday) {
		this.holiday = holiday;
	}

	public HolidayWish(Long id, String description, String location) {
		super();
		this.id = id;
		this.description = description;
		this.location = location;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
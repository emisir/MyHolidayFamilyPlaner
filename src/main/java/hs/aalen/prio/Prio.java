package hs.aalen.prio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import hs.aalen.Holidaywish.HolidayWish;
import hs.aalen.Familymember.FamilyMember;

@Entity
public class Prio {

	@Id //primariy key id
	@GeneratedValue(strategy = GenerationType.AUTO) //ID generates automatically 
	private Long id;
	
	// n to 1 relationship
	@ManyToOne
	
	//stores the id value and has a foreign key to the Familymember entity
	@JoinColumn(name = "family_member_id", referencedColumnName = "id")
	private FamilyMember familyMember;

	// n to 1 relationship
	@ManyToOne
	
	//stores the id value and has a foreign key to the Holidaywish entity
	@JoinColumn(name = "holiday_wish_id", referencedColumnName = "id")
	private HolidayWish holidayWish;

	private int priority;

	public Prio() {

	}

	public Prio(Long id, FamilyMember familyMember, HolidayWish holidayWish, int priority) {
		super();
		this.id = id;
		this.familyMember = familyMember;
		this.holidayWish = holidayWish;
		this.priority = priority;
	}

	// set and get methods
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FamilyMember getFamilyMember() {
		return familyMember;
	}

	public void setFamilyMember(FamilyMember familyMember) {
		this.familyMember = familyMember;
	}

	public HolidayWish getHolidayWish() {
		return holidayWish;
	}

	public void setHolidayWish(HolidayWish holidayWish) {
		this.holidayWish = holidayWish;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

}

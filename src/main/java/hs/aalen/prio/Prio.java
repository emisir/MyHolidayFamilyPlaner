package hs.aalen.prio;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import hs.aalen.Holidaywish.HolidayWish;
import hs.aalen.familymember.FamilyMember;

@Entity
public class Prio {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "family_member_id", referencedColumnName = "id")
	private FamilyMember familyMember;

	@ManyToOne
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

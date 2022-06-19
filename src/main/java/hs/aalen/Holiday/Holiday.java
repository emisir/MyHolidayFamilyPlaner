package hs.aalen.Holiday;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import hs.aalen.Holidaywish.HolidayWish;

@Entity
public class Holiday {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String title;
	private String time;

	@OneToMany(mappedBy = "holiday")
	public List<HolidayWish> wishes;
	
	public Holiday() {
		
	}

	public Holiday(Long id, String title, String time, List<HolidayWish> wishes) {
		super();
		this.id = id;
		this.title = title;
		this.time = time;
		this.wishes = wishes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public List<HolidayWish> getWishes() {
		return wishes;
	}

	public void setWishes(List<HolidayWish> wishes) {
		this.wishes = wishes;
	}


}
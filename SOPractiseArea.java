package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "so_practise_Area")
public class SOPractiseArea {
	@Id
	@Column(name = "Practicearea_ID")
	private int practiceareaID;

	@Column(name = "Practicearea_Name")
	private String practiceAreaName;
	
	
	public SOPractiseArea() {

	}

	public SOPractiseArea(int practiceareaID, String practiceAreaName) {
		super();
		this.practiceareaID = practiceareaID;
		this.practiceAreaName = practiceAreaName;
	}

	public int getPracticeAreaID() {
		return practiceareaID;
	}

	public void setPracticeAreaID(int practiceareaID) {
		this.practiceareaID = practiceareaID;
	}

	public String getPracticeAreaName() {
		return practiceAreaName;
	}

	public void setPracticeAreaName(String practiceAreaName) {
		this.practiceAreaName = practiceAreaName;
	}

	

}

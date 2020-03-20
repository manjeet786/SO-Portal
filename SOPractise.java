package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "so_practise")
public class SOPractise {
	@Id
	@Column(name = "Practiceid")
	private int practiceID;
	@Column(name = "areaid")
	private int practiceareaID;
	@Column(name = "Practice_Name")
	private String practiceName;
	@Column(name = "Practice_POC")
	private String practicePOC;
	@Column(name = "Engagement_POC")
	private String engagementPOC;

	public SOPractise() {

	}

	public SOPractise(int practiceID, String practiceName, String practicePOC, String engagementPOC,
			int practiceareaID) {
		super();
		this.practiceID = practiceID;
		this.practiceName = practiceName;
		this.practicePOC = practicePOC;
		this.engagementPOC = engagementPOC;
		this.practiceareaID = practiceareaID;
	}

	public int getPracticeAreaID() {
		return practiceareaID;
	}

	public void setPracticeAreaID(int practiceAreaID) {
		this.practiceareaID = practiceAreaID;
	}

	public int getPracticeID() {
		return practiceID;
	}

	public void setPracticeID(int practiceID) {
		this.practiceID = practiceID;
	}

	public String getPracticeName() {
		return practiceName;
	}

	public void setPracticeName(String practiceName) {
		this.practiceName = practiceName;
	}

	public String getPracticePOC() {
		return practicePOC;
	}

	public void setPracticePOC(String practicePOC) {
		this.practicePOC = practicePOC;
	}

	public String getEngagementPOC() {
		return engagementPOC;
	}

	public void setEngagementPOC(String engagementPOC) {
		this.engagementPOC = engagementPOC;
	}

}

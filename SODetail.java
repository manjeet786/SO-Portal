package com.cts.soportal;

import java.sql.Date;
////   (
//SO_Id int identity(1,1),
//SO_Type char(3),
//SO_Status char(3),
//Practise_Id int,
//SO_Priority int,
//SO_Comment varchar(1000),
//Last_working_date date,
//Billing_Start_Date date,
//Location_Type char(3),
//City_Name varchar(50),
//RIMS_ID varchar(50),
//Tracking_No varchar(5),
//Skill_Set varchar(50),
//SO_Creation_date date,
//Fulfillment_POC varchar(50),
//LOB_Id int,
//Practise_Area varchar(50),
//Job_Level varchar(50),
//Project_Type char(3),
//Project_ID char(3),
//DL_Mapping varchar(20),
//EL_Mapping varchar(20),
//Bill_Rate [decimal](16, 2) NULL
//);
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SO_DETAIL")
public class SODetail {

	@Id
	@GeneratedValue
	@Column(name = "SO_Id")
	private Integer id;
	@Column(name = "SO_Type")
	private String soType;
	@Column(name = "SO_Status")
	private String soStatus;
	@Column(name = "Practise_Id")
	private String practice;
	@Column(name = "SO_Priority")
	private String priority;

	/*private int uniqueId;

	private String soAgeing;*/
	@Column(name = "SO_Creation_date")
	private Date day1;
	@Column(name = "Last_working_date")
	private Date day2;
	@Column(name = "Location_Type")
	private String location;
	@Column(name = "City_Name")
	private String city;
	@Column(name = "RIMS_ID")
	private String rims;
	@Column(name = "Tracking_No")
	private String tracking;
	@Column(name = "Project_Type")
	private String projectType;
	@Column(name = "Project_ID")
	private Integer projectId;
	/*@Column(name = "Project_Name")
	private String projectName;*/
	@Column(name = "Job_Level")
	private String jobLevel;
	@Column(name = "Practise_Area")
	private String practiceArea;
	@Column(name = "LOB_Id")
	private String clientLob;
	@Column(name = "Fulfillment_POC")
	private String fulfillmentPoc;
	@Column(name = "Skill_Set")
	private String skills;
	@Column(name = "Billing_Start_Date")
	private Date day3;

	//private String blmlsblUpside;

	//private int leadTime;

	//private int cp;

	/*private int revenueLoss;

	private int riskAmount;*/
	@Column(name = "DL_Mapping")
	private String dLMapping;
	@Column(name = "EL_Mapping")
	private String elMapping;
	@Column(name = "SO_Comment")
	private String soComments;
	@Column(name = "Bill_Rate")
	private Float billRate;

	public SODetail() {

	}

	public SODetail(Integer id, String soType, String soStatus, String practise, String priority, int uniqueId,
			String soAgeing, Date day1, Date day2, String location, String city, String rims,
			String tracking, String projectType, int projectId, String projectName, String jobLevel,
			String practiceArea, String clientLob, String fulfillmentPoc, String skills, Date day3,
			String blmlsblUpside, int leadTime, int cp, int revenueLoss, int riskAmount, String dLMapping,
			String elMapping, String soComments, float billRate) {
		super();
		this.id = id;
		this.soType = soType;
		this.soStatus = soStatus;
		this.practice = practice;
		this.priority = priority;
		//this.uniqueId = uniqueId;
		//this.soAgeing = soAgeing;
		this.day1 = day1;
		this.day2 = day2;
		this.location = location;
		this.city = city;
		this.rims = rims;
		this.tracking = tracking;
		this.projectType = projectType;
		this.projectId = projectId;
		//this.projectName = projectName;
		this.jobLevel = jobLevel;
		this.practiceArea = practiceArea;
		this.clientLob = clientLob;
		this.fulfillmentPoc = fulfillmentPoc;
		this.skills = skills;
		this.day3 = day3;
		//this.blmlsblUpside = blmlsblUpside;
	//	this.leadTime = leadTime;
		//this.cp = cp;
		//this.revenueLoss = revenueLoss;
		//this.riskAmount = riskAmount;
		this.dLMapping = dLMapping;
		this.elMapping = elMapping;
		this.soComments = soComments;
		this.billRate = billRate;
	}

	public Float getBillRate() {
		return billRate;
	}

	public void setBillRate(Float billRate) {
		this.billRate = billRate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSoType() {
		return soType;
	}

	public void setSoType(String soType) {
		this.soType = soType;
	}

	public String getSoStatus() {
		return soStatus;
	}

	public void setSoStatus(String soStatus) {
		this.soStatus = soStatus;
	}

	public String getPractice() {
		return practice;
	}

	public void setPractice(String practice) {
		this.practice = practice;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	/*public int getUniqueId() {
		return uniqueId;
	}

	public void setUniqueId(int uniqueId) {
		this.uniqueId = uniqueId;
	}

	public String getSoAgeing() {
		return soAgeing;
	}

	public void setSoAgeing(String soAgeing) {
		this.soAgeing = soAgeing;
	}*/

	

	


	

	public Date getDay1() {
		return day1;
	}

	public void setDay1(Date day1) {
		this.day1 = day1;
	}

	
	public Date getDay2() {
		return day2;
	}

	public void setDay2(Date day2) {
		this.day2 = day2;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRims() {
		return rims;
	}

	public void setRims(String rims) {
		this.rims = rims;
	}

	public String getTracking() {
		return tracking;
	}

	public void setTracking(String tracking) {
		this.tracking = tracking;
	}

	public String getProjectType() {
		return projectType;
	}

	public void setProjectType(String projectType) {
		this.projectType = projectType;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	/*public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}*/

	public String getJobLevel() {
		return jobLevel;
	}

	public void setJobLevel(String jobLevel) {
		this.jobLevel = jobLevel;
	}

	public String getpracticeArea() {
		return practiceArea;
	}

	public void setPractiseArea(String practiceArea) {
		this.practiceArea = practiceArea;
	}

	public String getClientLob() {
		return clientLob;
	}

	public void setClientLob(String clientLob) {
		this.clientLob = clientLob;
	}

	public String getFulfillmentPoc() {
		return fulfillmentPoc;
	}

	public void setFulfillmentPoc(String fulfillmentPoc) {
		this.fulfillmentPoc = fulfillmentPoc;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}


	public Date getDay3() {
		return day3;
	}

	public void setDay3(Date day3) {
		this.day3 = day3;
	}

	/*public String getBlmlsblUpside() {
		return blmlsblUpside;
	}

	public void setBlmlsblUpside(String blmlsblUpside) {
		this.blmlsblUpside = blmlsblUpside;
	}
*/
	/*public int getLeadTime() {
		return leadTime;
	}

	public void setLeadTime(int leadTime) {
		this.leadTime = leadTime;
	}
*/
	/*public int getCp() {
		return cp;
	}

	public void setCp(int cp) {
		this.cp = cp;
	}*/

	/*public int getRevenueLoss() {
		return revenueLoss;
	}

	public void setRevenueLoss(int revenueLoss) {
		this.revenueLoss = revenueLoss;
	}

	public int getRiskAmount() {
		return riskAmount;
	}

	public void setRiskAmount(int riskAmount) {
		this.riskAmount = riskAmount;
	}*/

	
	public String getdLMapping() {
		return dLMapping;
	}

	public void setdLMapping(String dLMapping) {
		this.dLMapping = dLMapping;
	}

	public String getElMapping() {
		return elMapping;
	}

	public void setElMapping(String elMapping) {
		this.elMapping = elMapping;
	}

	public String getsoComments() {
		return soComments;
	}

	public void setsoComments(String soComments) {
		this.soComments = soComments;
	}
	

}

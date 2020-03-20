package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//select Location_Id,City_Name from MSTR_Resource_Location
@Entity
@Table(name = "MSTR_Resource_Location")
public class MstrResourceLocation {
	@Id
	@GeneratedValue
	@Column(name = "Location_Id")
	private String locationId;
	@Column(name = "City_Name")
	private String cityName;

	public MstrResourceLocation() {

	}

	public MstrResourceLocation(String locationId, String cityName) {
		super();
		this.locationId = locationId;
		this.cityName = cityName;
	}

	public String getLocationId() {
		return locationId;
	}

	public void setLocationId(String locationId) {
		this.locationId = locationId;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

}

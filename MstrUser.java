package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MSTR_USER")
public class MstrUser {
	@Id
	@GeneratedValue
	@Column(name = "Login_Id")
	private String loginId;
	@Column(name = "User_Password")
	private String userPassword;
	@Column(name = "First_Name")
	private String firstName;
	@Column(name = "Middle_Name")
	private String middleName;
	@Column(name = "Last_Name")
	private String lastName;

	public MstrUser() {

	}

	public MstrUser(String loginId, String userPassword, String firstName, String middleName, String lastName) {
		super();
		this.loginId = loginId;
		this.userPassword = userPassword;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

}

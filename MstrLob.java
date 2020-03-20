package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

//select LOB_Id,LOB_Name from MSTR_LOB
@Entity
@Table(name = "MSTR_LOB")
public class MstrLob {
	@Id
	@GeneratedValue
	@Column(name = "LOB_Id")
	private String lobId;
	@Column(name = "LOB_Name")
	private String lobName;
	
	public MstrLob()
	{
		
	}

	public MstrLob(String lobId, String lobName) {
		super();
		this.lobId = lobId;
		this.lobName = lobName;
	}

	public String getLobId() {
		return lobId;
	}

	public void setLobId(String lobId) {
		this.lobId = lobId;
	}

	public String getLobName() {
		return lobName;
	}

	public void setLobName(String lobName) {
		this.lobName = lobName;
	}
		
	
}

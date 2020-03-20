package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MSTR_STATUS")
public class MstrStatus {

	@Id
	@GeneratedValue
	@Column(name = "Status_Id")
	private String statusId;
	@Column(name = "Status_Type")
	private String statusType;
	@Column(name = "Status_Desc")
	private String statusDesc;
	
	/*@Column(name = "SortOrder")
	private Integer sortOrder;*/

	public MstrStatus() {

	}

	public MstrStatus(String statusId, String statusType, String statusDesc) {
		super();
		this.statusId = statusId;
		this.statusType = statusType;
		this.statusDesc = statusDesc;
		/*this.sortOrder = sortOrder;*/
	}

	public String getStatusId() {
		return statusId;
	}

	public void setStatusId(String statusId) {
		this.statusId = statusId;
	}

	public String getStatusType() {
		return statusType;
	}

	public void setStatusType(String statusType) {
		this.statusType = statusType;
	}

	public String getStatusDesc() {
		return statusDesc;
	}

	public void setStatusDesc(String statusDesc) {
		this.statusDesc = statusDesc;
	}

	/*public Integer getSortOrder() {
		return sortOrder;
	}

	public void setSortOrder(Integer sortOrder) {
		this.sortOrder = sortOrder;
	}*/

}

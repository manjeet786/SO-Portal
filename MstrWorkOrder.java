package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MSTR_Workorder")
public class MstrWorkOrder {
	@Id
	@GeneratedValue
	@Column(name = "Workorder_ID")
	private Integer workOrderID;
	@Column(name = "Cognizant_Workorder_Id")
	private String cognizantWorkOrderId;
	@Column(name = "Workorder_Name")
	private String workOrderName;

	public MstrWorkOrder() {

	}

	public MstrWorkOrder(Integer workOrderID, String cognizantWorkOrderId, String workOrderName) {
		super();
		this.cognizantWorkOrderId = cognizantWorkOrderId;
		this.workOrderName = workOrderName;
		this.workOrderID = workOrderID;
	}

	public Integer getWorkOrderID() {
		return workOrderID;
	}

	public void setWorkOrderID(Integer workOrderID) {
		this.workOrderID = workOrderID;
	}

	public String getCognizantWorkorderId() {
		return cognizantWorkOrderId;
	}

	public void setCognizantWorkorderId(String cognizantWorkOrderId) {
		this.cognizantWorkOrderId = cognizantWorkOrderId;
	}

	public String getWorkOrderName() {
		return workOrderName;
	}

	public void setWorkOrderName(String workOrderName) {
		this.workOrderName = workOrderName;
	}

}

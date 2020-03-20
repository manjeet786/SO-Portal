package com.cts.soportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "SO_SkillSet")
public class MstrSkill {
	@Id
	@GeneratedValue
	@Column(name = "Skill_Id ")
	private Integer skillId;
	@Column(name = "Skill_Name")
	private String skillName;
	public MstrSkill() {

	}
	public MstrSkill(Integer skillId, String skillName) {
		super();
		this.skillId = skillId;
		this.skillName = skillName;
	}
	public Integer getSkillId() {
		return skillId;
	}
	public void setSkillId(Integer skillId) {
		this.skillId = skillId;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	
	
}

package com.cts.soportal;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SODao {

	/* Logger logger = LoggerFactory.getLogger(SODao.class); */

	@Autowired
	private EntityManager em;
	ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
	LocalDate localDate = zonedDateTime.toLocalDate(); // gets you the date
														// without time
	ZoneId zoneId = zonedDateTime.getZone(); // gets you the timezone

	public MstrUser findByLoginId(String loginId) {
		Query query = em.createNativeQuery("select * from MSTR_USER where Login_Id = :loginId", MstrUser.class);
		query.setParameter("loginId", loginId);
		List<MstrUser> resultList = query.getResultList();
		return resultList.get(0);
	}

	public List<MstrStatus> findByStatusType(String statusType1, String statusType2) {
		Query query = em.createNativeQuery(
				" SELECT * FROM mstr_status where Status_Type IN (:statusType1, :statusType2)", MstrStatus.class);
		query.setParameter("statusType1", statusType1);
		query.setParameter("statusType2", statusType2);
		List<MstrStatus> resultList = query.getResultList();
		return resultList;
	}

	public List<MstrResourceLocation> findByLocation() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(" SELECT Location_Id,City_Name FROM MSTR_Resource_Location",
				MstrResourceLocation.class);
		List<MstrResourceLocation> resultList = query.getResultList();
		return resultList;
	}

	public List<MstrLob> findByLob() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(" SELECT LOB_Id,LOB_Name FROM MSTR_LOB", MstrLob.class);
		List<MstrLob> resultList = query.getResultList();
		return resultList;
	}

	@Transactional
	public void save(SODetail soDetail) throws ParseException {
		/*
		 * em.
		 * createNativeQuery("INSERT INTO userinfo ( login, upassword, email, mobile, fax, dob)"
		 * + " VALUES ( :a, :b, :c, :d, :e, :f)") .setParameter("a",
		 * objUser.getLogin()) .setParameter("b", objUser.getUpassword())
		 * .setParameter("c", objUser.getEmail()) .setParameter("d",
		 * objUser.getMobile()) .setParameter("e", objUser.getFax())
		 * .setParameter("f", objUser.getDob()).executeUpdate();
		 * em.getTransaction().commit();
		 */
		Query query = em.createNativeQuery(
				"INSERT INTO SO_DETAIL(SO_Type,SO_Status,Billing_Start_Date,Practise_Id,SO_Priority,SO_Comment,Last_working_date,Location_Type,City_Name,RIMS_ID,Tracking_No,Skill_Set,SO_Creation_date,Fulfillment_POC,LOB_Id,Practise_Area,Job_Level,Project_Type,Project_ID,DL_Mapping,EL_Mapping,Bill_Rate)"
						+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

		/*
		 * Query query = em.createNativeQuery(
		 * "INSERT INTO SO_DETAIL(SO_Type,SO_Status,Practise_Id,SO_Priority,SO_Comment,Location_Type,City_Name,RIMS_ID,Tracking_No,Skill_Set,Fulfillment_POC,LOB_Id,Practise_Area,Job_Level,Project_Type,Project_ID,DL_Mapping,EL_Mapping,Bill_Rate)"
		 * + "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		 */

		query.setParameter(1, soDetail.getSoType());
		query.setParameter(2, soDetail.getSoStatus());
		query.setParameter(3, soDetail.getDay3());
		query.setParameter(4, soDetail.getPractice());
		query.setParameter(5, soDetail.getPriority());
		query.setParameter(6, soDetail.getsoComments());
		query.setParameter(7, soDetail.getDay2());
		query.setParameter(8, soDetail.getLocation());
		query.setParameter(9, soDetail.getCity());
		query.setParameter(10, soDetail.getRims());
		query.setParameter(11, soDetail.getTracking());
		query.setParameter(12, soDetail.getSkills());
		query.setParameter(13, soDetail.getDay1());

		query.setParameter(14, soDetail.getFulfillmentPoc());
		query.setParameter(15, soDetail.getClientLob());
		query.setParameter(16, soDetail.getpracticeArea());
		query.setParameter(17, soDetail.getJobLevel());
		query.setParameter(18, soDetail.getProjectType());
		query.setParameter(19, soDetail.getProjectId());
		query.setParameter(20, soDetail.getdLMapping());
		query.setParameter(21, soDetail.getElMapping());
		query.setParameter(22, soDetail.getBillRate());
		/*
		 * //query.setParameter(3, soDetail.getBillingDate());
		 * query.setParameter(3, soDetail.getPractise()); query.setParameter(4,
		 * soDetail.getPriority()); query.setParameter(5,
		 * soDetail.getsoComments()); //query.setParameter(7,
		 * soDetail.getSolastworkingDate()); query.setParameter(6,
		 * soDetail.getLocation()); query.setParameter(7, soDetail.getCity());
		 * query.setParameter(8, soDetail.getRims()); query.setParameter(9,
		 * soDetail.getTracking()); query.setParameter(10,
		 * soDetail.getSkills()); //query.setParameter(13,
		 * soDetail.getSocreationDate()); query.setParameter(11,
		 * soDetail.getFulfillmentPoc()); query.setParameter(12,
		 * soDetail.getClientLob()); query.setParameter(13,
		 * soDetail.getPractiseArea()); query.setParameter(14,
		 * soDetail.getJobLevel()); query.setParameter(15,
		 * soDetail.getProjectType()); query.setParameter(16,
		 * soDetail.getProjectId()); query.setParameter(17,
		 * soDetail.getDlMapping()); query.setParameter(18,
		 * soDetail.getElMapping()); query.setParameter(19,
		 * soDetail.getBillRate());
		 */
		query.executeUpdate();
		// em.getTransaction().commit();
		// TODO Auto-generated method stub
		// System.out.println(query.getResultList());
	}

	public List<SODetail> findBySOId() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(" SELECT * FROM SO_Detail", SODetail.class);

		List<SODetail> resultList = query.getResultList();

		return resultList;
	}

	public List<MstrWorkOrder> findByProject() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(
				" SELECT WorkOrder_ID, Cognizant_Workorder_Id,WorkOrder_Name FROM (Select WorkOrder_ID, Cognizant_Workorder_Id,WorkOrder_Name , ROW_NUMBER() over(partition by Cognizant_Workorder_Id order by WorkOrder_Name ) as rownumber from MSTR_Workorder) A WHERE rownumber=1",
				MstrWorkOrder.class);

		List<MstrWorkOrder> resultList = query.getResultList();

	
		return resultList;
	}

	public List<MstrSkill> findBySkill() {
		Query query = em.createNativeQuery(" SELECT Skill_Id,Skill_Name  FROM SO_SkillSet", MstrSkill.class);

		List<MstrSkill> resultList = query.getResultList();

		return resultList;
	}

	public List<SOPractiseArea> findByPractice() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(" SELECT PracticeArea_ID,Practicearea_Name  FROM so_practise_Area",
				SOPractiseArea.class);

		List<SOPractiseArea> resultList = query.getResultList();

		return resultList;
	}

	public List<SOPractise> findBydl() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(
				" SELECT PracticeID,Practice_Name ,areaid,Practice_POC,Engagement_POC from so_practise where areaid IN (1,2) ",
				SOPractise.class);
		// Query query = em.createNativeQuery(" SELECT PracticeID,Practice_Name
		// ,areaid,Practice_POC,Engagement_POC from so_practise where areaid IN
		// (1,2) ", SOPractise.class);
		List<SOPractise> resultList = query.getResultList();

		return resultList;
	}

	public List<SODetail> fetchData() {
		// TODO Auto-generated method stub
		Query query = em.createNativeQuery(" SELECT * FROM SO_DETAIL ", SODetail.class);

		// Query query = em.createNativeQuery(" SELECT PracticeID,Practice_Name
		// ,areaid,Practice_POC,Engagement_POC from so_practise where areaid IN
		// (1,2) ", SOPractise.class);
		List<SODetail> resultList = query.getResultList();

		return resultList;
	}

	public List<SOPractise> findByPracticeName(String practiceName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public void deleteById(Integer id) {
		em.joinTransaction();
		Query query = em.createNativeQuery("DELETE FROM SO_DETAIL WHERE SO_Id = :param1", SODetail.class);
		query.setParameter("param1", id);
		query.executeUpdate();
		// TODO Auto-generated method stub
		
	}
}

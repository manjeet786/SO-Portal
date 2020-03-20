package com.cts.soportal;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class SOService {
	
	
		
		
		@Autowired
		SODao soDao;
		
	public void save(SODetail soDetail) throws ParseException {
			soDao.save(soDetail);
		}
		

		public MstrUser findByLoginId(String loginId) {
			return soDao.findByLoginId(loginId);
		}

		/*public List<MstrStatus> findByStatusType(String statusType) {
			// TODO Auto-generated method stub
			return soDao.findByStatusType(statusType);
		}*/

		

		public List<MstrStatus> findByStatusType(String statusType1, String statusType2) {
			return soDao.findByStatusType(statusType1, statusType2);
		}

		

		

		
		public List<MstrResourceLocation> findByLocation() {
			// TODO Auto-generated method stub
			return soDao.findByLocation();
		}

		public List<MstrLob> findByLob() {
			// TODO Auto-generated method stub
			return soDao.findByLob();
		}


		public List<SODetail> findBySOId() {
			// TODO Auto-generated method stub
			return soDao.findBySOId();
		}


		public List<MstrWorkOrder> findByProject() {
			// TODO Auto-generated method stub
			return soDao.findByProject();
		}


		public List<MstrSkill> findBySkill() {
			// TODO Auto-generated method stub
			return soDao.findBySkill();
		}


		public List<SOPractiseArea> findByPractice() {
			// TODO Auto-generated method stub
			return soDao.findByPractice();
		}
		public List<SOPractise> findBydl() {
			// TODO Auto-generated method stub
			return soDao.findBydl();
		}


		public List<SODetail> fetchData() {
			// TODO Auto-generated method stub
			return soDao.fetchData();
		}


		


		public void deleteById(Integer id) {
			 
		            soDao.deleteById(id);
		        
		    } 
			// TODO Auto-generated method stub
			
		


		

		

		
		

		

		

	}



package com.task.TaskCvApp.Service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.Cv;
import com.task.TaskCvApp.Model.User;
import com.task.TaskCvApp.Repository.CvRepository;
import com.task.TaskCvApp.Request.CvCreateRequest;

@Service
public  class CvServiceImplement  implements CvService{

	@Autowired
	private CvRepository  cvRepository;
	private UserService   userService;

	public CvServiceImplement(CvRepository cvRepository, UserService userService) {
		this.cvRepository = cvRepository;
		this.userService = userService;
	}

	@Override
	public Cv add(CvCreateRequest newcv) {
		User user= userService.get(newcv.getUserid());
		
		
		
		
		if(user!=null) {
			
			Cv toSaveCv= new Cv();
			toSaveCv.setPhoneNumber(newcv.getPhoneNumber());
			toSaveCv.setAboutBusiness(newcv.getAboutBusiness());
			toSaveCv.setBusinessName(newcv.getBusinessName());
			toSaveCv.setBusinessYear(newcv.getBusinessYear());
			toSaveCv.setAboutBusiness(newcv.getAboutBusiness());
			toSaveCv.setEducationName(newcv.getEducationName());
			toSaveCv.setEducationYear(newcv.getEducationYear());
			toSaveCv.setTalents(newcv.getTalents());
			toSaveCv.setUser(user);
			return cvRepository.save(toSaveCv);}
		
		
		else {	return null;}
		
		
	}

	@Override
	public List<Cv> getAll() {
		return cvRepository.findAll();
	}

	@Override
	public Cv get(Long id) {

		return cvRepository.findById(id).orElseThrow();  //new ResponseEntity<Cv>(Cv,HttpStatus.CONTINUE);

	}

	@Override
	public String delete(Long id) {
		cvRepository.deleteById(id);
		return "Silme İşlemi Başarılı";
	}

	@Override
	public Cv update(Long id, Cv updateCv) {
		Optional<Cv> cv=cvRepository.findById(id);
		if(cv.isPresent()) { 								//id va rmı?
			Cv foundCv=cv.get();
			
			foundCv.setPhoneNumber(updateCv.getPhoneNumber());
			foundCv.setAboutBusiness(updateCv.getAboutBusiness());
			foundCv.setBusinessName(updateCv.getBusinessName());
			foundCv.setBusinessYear(updateCv.getBusinessYear());
			foundCv.setAboutBusiness(updateCv.getAboutBusiness());
			foundCv.setEducationName(updateCv.getEducationName());
			foundCv.setEducationYear(updateCv.getEducationYear());
			foundCv.setTalents(updateCv.getTalents());
			
			
			cvRepository.save(foundCv);
			return foundCv;
		}
		else
		{
			return null;
		}
	}

	@Override
	public Cv findByUserId(Long id) {
		
		return cvRepository.findByUserId(id);
	}





}

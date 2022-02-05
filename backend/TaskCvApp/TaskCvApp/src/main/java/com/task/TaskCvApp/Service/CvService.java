package com.task.TaskCvApp.Service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.Cv;
import com.task.TaskCvApp.Request.CvCreateRequest;


@Service
public interface CvService {

	public  Cv add(CvCreateRequest cv) ;
	public Cv get(Long id);
	public List<Cv> getAll();
	public String delete(Long id);
	public Cv  update(Long id, Cv updateCv);
	public Cv findByUserId(Long id);
	
} 
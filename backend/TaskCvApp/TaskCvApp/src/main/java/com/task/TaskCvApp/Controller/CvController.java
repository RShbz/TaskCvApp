package com.task.TaskCvApp.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.TaskCvApp.Model.Cv;
import com.task.TaskCvApp.Request.CvCreateRequest;
import com.task.TaskCvApp.Service.CvService;

@RestController
@RequestMapping("/cvs")
@CrossOrigin
//@JsonIgnoreProperties(value={"handler","hibernatelazyInitializer","fieldHandler"})
public class CvController {

	@Autowired
	private CvService cvService;

	
	public CvController(CvService cvService) {
		this.cvService = cvService;
	}

	
	@PostMapping("/add")
	public Cv add(@RequestBody CvCreateRequest newcv) {
		return cvService.add(newcv);
		
	}
	
	@GetMapping("/getAll")
	public List<Cv> getAllCv() {
		return cvService.getAll();
	}
	
	@GetMapping("/{id}")
	public Cv getCv(@PathVariable Long id) {

		return cvService.get(id);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		
		return cvService.delete(id).toString();
	}	
	@PutMapping("/{id}") 
	public Cv updateOneCv(@PathVariable Long id, @RequestBody Cv updateCv) {
		return cvService.update(id,updateCv);
	}
	
}

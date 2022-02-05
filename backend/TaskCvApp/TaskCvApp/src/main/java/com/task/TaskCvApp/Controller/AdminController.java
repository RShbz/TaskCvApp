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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.task.TaskCvApp.Model.Admin;
import com.task.TaskCvApp.Service.AdminService;

@RestController
@RequestMapping("/admins")
@CrossOrigin
@JsonIgnoreProperties(value={"handler","hibernatelazyInitializer","fieldHandler"})
public class AdminController {

	@Autowired
	private AdminService adminService;

	
	public AdminController(AdminService adminService) {
		this.adminService = adminService;
	}

	
	@PostMapping("/add")
	public Admin add(@RequestBody Admin admin) {
		return adminService.add(admin);
		
	}
	
	@GetMapping("/getAll")
	public List<Admin> getAllAdmin() {
		return adminService.getAll();
	}
	
	@GetMapping("/{id}")
	public Admin getAdmin(@PathVariable Long id) {
		System.out.print("*********gelen id:"+id);
		return adminService.get(id);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		
		return adminService.delete(id).toString();
	}	
	@PutMapping("/{id}") 
	public Admin updateOneAdmin(@PathVariable Long id, @RequestBody Admin updateAdmin) {
		return adminService.update(id,updateAdmin);
	}
	
}

package com.task.TaskCvApp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.Admin;
import com.task.TaskCvApp.Repository.AdminRepository;

@Service
public  class AdminServiceImplement  implements AdminService{

	@Autowired
	private AdminRepository  adminRepository;

	
	@Override
	public Admin add(Admin admin) {
		return adminRepository.save(admin);
	}

	@Override
	public List<Admin> getAll() {
		return adminRepository.findAll();
	}

	@Override
	public Admin get(Long id) {

		return adminRepository.findById(id).orElseThrow();  //new ResponseEntity<Admin>(Admin,HttpStatus.CONTINUE);

	}

	@Override
	public String delete(Long id) {
		adminRepository.deleteById(id);
		return "Silme İşlemi Başarılı";
	}

	@Override
	public Admin update(Long id, Admin updateAdmin) {
		Optional<Admin> Admin=adminRepository.findById(id);
		if(Admin.isPresent()) { 								//id va rmı?
			Admin foundAdmin=Admin.get();
			foundAdmin.setName(updateAdmin.getName());
			foundAdmin.setSname(updateAdmin.getSname());
			foundAdmin.setPassword(updateAdmin.getPassword());
			adminRepository.save(foundAdmin);
			return foundAdmin;
		}
		else
		{
			return null;
		}
	}





}

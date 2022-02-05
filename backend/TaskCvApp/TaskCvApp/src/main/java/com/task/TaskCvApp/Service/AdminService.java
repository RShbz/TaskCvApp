package com.task.TaskCvApp.Service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.Admin;


@Service
public interface AdminService {

	public  Admin add(Admin admin) ;
	public Admin get(Long id);
	public List<Admin> getAll();
	public String delete(Long id);
	public Admin  update(Long id, Admin updateAdmin);
} 
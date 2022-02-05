package com.task.TaskCvApp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.User;
import com.task.TaskCvApp.Request.UserLoginRequest;


@Service
public interface UserService {

	public User add(User user) ;
	public User get(Long id);
	public User  update(Long id, User updateUser);
	public List<User> getAll();
	public UserLoginRequest login(Optional<String> userEmail,Optional<String> userPassword);
	public String delete(Long id);

	

	
} 
package com.task.TaskCvApp.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.task.TaskCvApp.Model.Cv;
import com.task.TaskCvApp.Model.User;
import com.task.TaskCvApp.Repository.UserRepository;
import com.task.TaskCvApp.Request.UserLoginRequest;

@Service
public  class UserServiceImplement  implements UserService{

	@Autowired
	private UserRepository  userRepository;
	private CvService  cvService;
	
	
	@Override
	public User add(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> getAll() {
		return userRepository.findAll();
	}

	@Override
	public User get(Long id) {

		return userRepository.findById(id).orElse(null);  //new ResponseEntity<User>(user,HttpStatus.CONTINUE);

	}

	@Override
	public String delete(Long id) {
		userRepository.deleteById(id);
		return "Silme İşlemi Başarılı";
	}

	@Override
	public User update(Long id, User updateUser) {
		Optional<User> user=userRepository.findById(id);
		if(user.isPresent()) { 								//id va rmı?
			User foundUser=user.get();
			foundUser.setName(updateUser.getName());
			foundUser.setSname(updateUser.getSname());
			foundUser.setPassword(updateUser.getPassword());
			foundUser.setEmail(updateUser.getEmail());
			userRepository.save(foundUser);
			return foundUser;
		}
		else
		{
			return null;
		}
	}


	@Override
	public UserLoginRequest login(Optional<String> userEmail, Optional<String> userPassword) {
		User userlogin=userRepository.findByEmailAndPassword(userEmail.get(), userPassword.get());
	//	Cv cv= cvService.findByUserId(userlogin.getId());
		if(userlogin!=null) {
			
			UserLoginRequest req=new UserLoginRequest();
			req.setName(userlogin.getName());
			req.setSname(userlogin.getSname());
			req.setEmail(userlogin.getEmail());
		//	req.setCvId(cv.getUser().getId());
			
			System.out.println(userEmail.get() + userPassword.get() + req);
			return req;
		}
			return null;
	}

	




}

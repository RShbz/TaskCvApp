package com.task.TaskCvApp.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.task.TaskCvApp.Model.User;
import com.task.TaskCvApp.Request.UserLoginRequest;
import com.task.TaskCvApp.Service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
//@JsonIgnoreProperties(value={"handler","hibernatelazyInitializer","fieldHandler"})
public class UserController {

	@Autowired
	private UserService userService;

	
	public UserController(UserService userService) {
		this.userService = userService;
	}

	
	@PostMapping("/add")
	public User add(@RequestBody User user) {
				
		return userService.add(user);
		
	}
	
	@GetMapping("/getAll")
	public List<User> getAllUser() {
		return userService.getAll();
	}
	
	@GetMapping("/{id}")
	public User getUser(@PathVariable Long id) {
		System.out.print("*********gelen id:"+id);
		return userService.get(id);
	}
	
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Long id) {
		
		return userService.delete(id).toString();
	}	
	@PutMapping("/{id}") 
	public User updateOneUser(@PathVariable Long id, @RequestBody User updateUser) {
		return userService.update(id,updateUser);
	}
	
	@PostMapping("/login")
	public UserLoginRequest userLogin(@RequestParam Optional<String> email,@RequestParam Optional<String> password){
		System.out.println("controller"+ email.get() + password.get() );
		
		return userService.login(email,password);
	}
	@PostMapping("/login2")
	public String userLogin2(@PathVariable Optional<User> email){
		System.out.println("controller"+ email );
		
		return "controller"+ email.get() ;
	}
	
}

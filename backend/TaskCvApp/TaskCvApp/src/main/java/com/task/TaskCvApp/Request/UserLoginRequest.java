package com.task.TaskCvApp.Request;

import lombok.Data;


@Data	
//@Getter
public class UserLoginRequest {
	
	private Long id;
	private String name;
	private String sname;
	private String email;
	private String phone;
	private Long cvId;
}

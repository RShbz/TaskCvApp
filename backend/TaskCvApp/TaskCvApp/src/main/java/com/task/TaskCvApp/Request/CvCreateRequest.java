package com.task.TaskCvApp.Request;





import lombok.Data;

@Data
public class CvCreateRequest {

	private Long id;
	
	private String phoneNumber;
	private String educationName;
	private String educationYear;
	private String businessName;
	private String businessYear;
	private String aboutBusiness;
	private String talents;
	private Long userid;
}


package com.task.TaskCvApp.Model;


import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;
//import javax.persistence.Column;
//import javax.persistence.FetchType;
//import org.hibernate.annotations.OnDelete;
//import org.hibernate.annotations.OnDeleteAction;
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@Table(name="admins")
@JsonIgnoreProperties(value={"handler","hibernatelazyInitializer","fieldHandler"})
public class Admin {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long id;

	private String name;

	private String sname;

	private String password;



	
	
}

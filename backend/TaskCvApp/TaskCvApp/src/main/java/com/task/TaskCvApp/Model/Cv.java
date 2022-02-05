package com.task.TaskCvApp.Model;




import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name="cvs")
@JsonIgnoreProperties(value={"handler","hibernatelazyInitializer","fieldHandler"})
public class Cv {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long id;
	

	@Column(length = 12)
	private String phoneNumber;
	
	@Column(length = 100)
	private String educationName;
	
	@Column(length = 10)
	private String educationYear;
	
	@Column(length = 100)
	private String businessName;
	
	@Column(length = 10)
	private String businessYear;
	
	@Column(length = 700)
	private String aboutBusiness;
	
	@Column(length = 700)
	private String talents;

		
	
	@OneToOne(fetch=FetchType.LAZY) 		//lazzy ile cv bilgileri çekilmeyecek
	@JoinColumn(name="userid",nullable=false,referencedColumnName = "id") // boş geçilmez
	@OnDelete(action=OnDeleteAction.CASCADE) //user silinirse cv yide sil
	@JsonIgnore	
			//json hataları vermesin
	private User user;


	
	
}

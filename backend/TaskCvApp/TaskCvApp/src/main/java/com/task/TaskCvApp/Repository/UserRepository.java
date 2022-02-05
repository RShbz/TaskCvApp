package com.task.TaskCvApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.TaskCvApp.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	
    User findByEmailAndPassword(String email, String password);
}

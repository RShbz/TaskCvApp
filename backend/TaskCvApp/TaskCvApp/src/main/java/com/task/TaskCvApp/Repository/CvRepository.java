package com.task.TaskCvApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.task.TaskCvApp.Model.Cv;

@Repository
public interface CvRepository extends JpaRepository<Cv,Long> {

	Cv findByUserId(Long userId);

}

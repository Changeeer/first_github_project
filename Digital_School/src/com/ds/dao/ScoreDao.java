package com.ds.dao;

import java.util.List;

import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Score;
import com.ds.model.Student;

public interface ScoreDao {

	void add(Score score);
	
	void delete(Score score);
	
	void update(Score score);
	
	Score getById(Long id);
	
	List<Score> getByStudent(Student student);
	
	List<Score> getByClassAndLesson(Classes classes,Lesson lesson);
	
	Score getByStuAndLesson(Student student,Lesson lesson);
	
}

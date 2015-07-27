package com.ds.dao;


import java.util.List;

import com.ds.model.Lesson;


public interface LessonDao{
	
	void add(Lesson lesson);
	
	Lesson getLessonById(Integer id);
	
	void update(Lesson lesson);
	
	List<Lesson> getAllLesson();
	
}
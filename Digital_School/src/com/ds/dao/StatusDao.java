package com.ds.dao;

import java.util.List;

import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Status;
import com.ds.model.Student;

public interface StatusDao {

		void add(Status status);
		
		void update(Status status);
		
		void delete(Status status);
		
		Status getById(int id);
		
		List<Status> getByStudent(Student student);
		
		List<Status> getByClasses(Classes classes);
		
		List<Status> getByClassAndLesson(Classes classes,Lesson lesson);
		
		List<Status> getByLesson(Lesson lesson);
}

package com.ds.dao;


import java.util.List;

import com.ds.model.Classes;
import com.ds.model.Teacher;


public interface ClassesDao{
	
	void add(Classes classes);
	
	Classes getClassesById(Integer id);
	
	void update(Classes classes);
	
	List<Classes> getAllClasses();
	
	List<Classes> getByTeacher(Teacher teacher);
	
}
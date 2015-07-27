package com.ds.dao;


import java.util.List;

import com.ds.model.Teacher;


public interface TeacherDao{
	
	void add(Teacher teacher);
	
	Teacher getTeacherById(Long number);
	
	void update(Teacher teacher);
	
	List<Teacher> getTeacherByNumAndPass(Teacher teacher);
	
	List<Teacher> getAllTeacher();
}
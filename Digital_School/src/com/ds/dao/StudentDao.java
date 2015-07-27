package com.ds.dao;


import java.util.List;

import com.ds.model.Classes;
import com.ds.model.Student;


public interface StudentDao{
	
	void add(Student student);
	
	Student getStudentById(Long number);
	
	void update(Student student);
	
	List<Student> getStudentByNumAndPass(Student student);
	
	List<Student> getStudentByClasses(Classes classes);
	
	List<Integer> getAllTotal();
}
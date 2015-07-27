package com.ds.dao;

import java.util.List;

import com.ds.model.Disscusion;
import com.ds.model.Lesson;
import com.ds.model.Student;

public interface DisscusionDao {
	
	void add(Disscusion disscusion);
	
	void delete(Disscusion disscusion);
	
	void update(Disscusion disscusion);
	
	Disscusion getById(Long id);
	
	List<Disscusion> getByPage(int PageSise,int Page);
	
	List<Disscusion> getLatestByLesson(Lesson lesson,int PageSise, int Page);
	
	List<Disscusion> getHotByLesson(Lesson lesson,int PageSise, int Page);
	
	List<Disscusion> getCoolByLesson(Lesson lesson,int PageSise, int Page);
	
	List<Disscusion> getByStudent(Long stu_num);
	
	long getStuDisNum(Long stu_num);
}

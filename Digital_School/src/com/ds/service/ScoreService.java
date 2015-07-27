package com.ds.service;

import net.sf.json.JSONObject;

public interface ScoreService {
	
	public void add(int lesson_id,Long stu_num);
	
	public void delete(Long score_id);
	
	public void update(Long score_id,String type,int marks);
	
	public Long getByStuAndLesson(int lesson_id,Long stu_num);
	
	public JSONObject getByClassesAndLesson(int class_id,int lesson_id);
	
	public JSONObject getByStudentId(Long stu_num);
}

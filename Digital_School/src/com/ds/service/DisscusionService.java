package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Disscusion;

public interface DisscusionService {
	
	public static final int IS_TEACHER = 1;
	public static final int IS_NOT_TEACHER = 0;
	
	public void add(Disscusion disscusion,Long user_id,int lesson_id,int rank);
	
	public void delete(Long id);
	//或许不用
	public void update(Disscusion disscusion,int lesson_id);
	
	public JSONObject getByLessonId(int lesson_id, String type,int PageSise, int Page);
	
	
}

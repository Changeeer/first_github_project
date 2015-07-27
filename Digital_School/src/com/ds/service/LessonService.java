package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Lesson;

public interface LessonService {

	/**
	 * 添加一个成员
	 * 
	 * @param member
	 */
	public void addLesson(Lesson lesson);
	
	public void updateLesson(Lesson lesson);
	
	public Lesson getlessonByid(int id);
	
	public JSONObject allLessons();
	

}

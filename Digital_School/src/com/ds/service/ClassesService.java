package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Classes;


public interface ClassesService {

	/**
	 * 添加一个成员
	 * 
	 * @param member
	 */
	public void addClasses(Classes classes);
	
	public void updateClasses(Classes classes,Long teacher_id);
	
	public Classes getClassesByid(int id);
	
	public JSONObject allClasses();
	
	public JSONObject getByTeacherId(Long id);
}

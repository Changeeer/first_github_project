package com.ds.service;

import net.sf.json.JSONObject;

public interface StatusService {

	// 状态只有0、1、-1  （未做、完成、未开放）
	
	public void add(Long stu_num);
	
	public void delete(int status_id);
	
	public void finishOrOpen(String lesson,int status_id,boolean sign);
	
	public void open(int lesson_id,int classes_id);
	
	public JSONObject getByStudentId(Long stu_id);
	
	
}

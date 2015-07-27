package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Student;
import com.ds.vo.StudentBean;


public interface StudentService {

	// 登录失败
	public static final int LOGIN_FAIL = 0;
	// 登陆成功
	public static final int LOGIN_SUCC = 1;


	public void addStudent(Student student);
	
	public int login(Student student);
	
	public JSONObject getStudentInfoByid(Long id);
	
	public JSONObject getStudentsByClasses(int classes_id);
	
	public String changePassword(Long number, String old_pass, String new_pass1,String new_pass2);

	public void addUpLearntime(Long number,Long time);
	
}

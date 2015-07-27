package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Teacher;
import com.ds.vo.TeacherBean;


public interface TeacherService {

	// 登录失败
	public static final int LOGIN_FAIL = 0;
	// 登陆成功
	public static final int LOGIN_SUCC = 1;

	public static final int PASS_NOT_SAME = 0;
	public static final int PASS_ERROR = -1;
	public static final int PASS_TRUE = 1;
	/**
	 * 添加一个成员
	 * 
	 * @param member
	 */
	public void addTeacher(Teacher teacher);
	
	public int login(Teacher teacher);
	
	public TeacherBean getTeacherInfoByid(Long id);
		
	public String changePassword(Long number, String old_pass, String new_pass1,String new_pass2);

	public JSONObject allTeahcers();
}

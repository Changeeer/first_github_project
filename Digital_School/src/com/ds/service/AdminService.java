package com.ds.service;

import com.ds.model.Admin;

public interface AdminService {
	

	// 登录失败
	public static final int LOGIN_FAIL = 0;
	// 登陆成功
	public static final int LOGIN_SUCC = 1;
	
	
	/**
	 * 登陆
	 * @param admin 管理员
	 * @return
	 */
	public int login(Admin admin);
	
	public String changePassword(Long number, String old_pass, String new_pass1,String new_pass2);

	
}

package com.ds.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ds.dao.AdminDao;
import com.ds.model.Admin;
import com.ds.service.AdminService;

@Service("AdminService")
public class AdminServiceImpl implements AdminService {

	private AdminDao adminDao;
	
	public AdminDao getAdminDao() {
		return adminDao;
	}
	@Resource(name="AdminDao")
	public void setAdminDao(AdminDao adminDao) {
		this.adminDao = adminDao;
	}

	/**
	 * 登陆
	 */
	@Override
	public int login(Admin admin) {
		// TODO Auto-generated method stub
		if(adminDao.getByIdAndPass(admin).size()>=1)
			return LOGIN_SUCC;
		else {
			return LOGIN_FAIL;
		}
	}

	/**
	 * 修改密码
	 */
	@Override
	public String changePassword(Long id, String old_pass, String new_pass1,String new_pass2) {
		// TODO Auto-generated method stub
		if (!new_pass1.equals(new_pass2))
			return "PASS_NOT_SAME";
		else {
			Admin admin=adminDao.getById(id);
			if (!(old_pass.equals(admin.getPassword())))
				return "PASS_ERROR";
			else {
				admin.setPassword(new_pass1);
				adminDao.update(admin);
				return "success";
			}
		}
	}
}

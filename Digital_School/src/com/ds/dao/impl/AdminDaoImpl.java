package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.AdminDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Admin;

@Repository("AdminDao")
public class AdminDaoImpl extends BaseDao implements AdminDao {

	@SuppressWarnings("unchecked")
	@Override
	public List<Admin> getByIdAndPass(Admin admin) {
		// TODO Auto-generated method stub
		List<Admin> admins=new ArrayList<Admin>();
		admins=(List<Admin>) pageQuery("from Admin as a where a.id=? and a.password=?", admin.getId(),admin.getPassword());
		return admins;
	}

	@Override
	public Admin getById(Long id) {
		// TODO Auto-generated method stub
		return (Admin) super.getById(Admin.class, id);
	}

	@Override
	public void update(Admin admin) {
		// TODO Auto-generated method stub
		super.update(admin);
	}

}

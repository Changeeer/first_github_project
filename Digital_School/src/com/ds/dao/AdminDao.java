package com.ds.dao;

import java.util.List;

import com.ds.model.Admin;

public interface AdminDao {
	
	List<Admin> getByIdAndPass(Admin admin);
	
	Admin getById(Long id);
	
	void update(Admin admin);
}

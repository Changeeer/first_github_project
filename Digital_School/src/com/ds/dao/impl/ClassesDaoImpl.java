package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.ClassesDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Classes;
import com.ds.model.Teacher;

@Repository("ClassesDao")
public class ClassesDaoImpl extends BaseDao
	implements ClassesDao{

	@Override
	public void add(Classes classes) {
		// TODO Auto-generated method stub
		super.add(classes);
	}

	@Override
	public Classes getClassesById(Integer id) {
		// TODO Auto-generated method stub
		return (Classes) super.getById(Classes.class, id);
	}

	@Override
	public void update(Classes classes) {
		// TODO Auto-generated method stub
		super.update(classes);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Classes> getAllClasses() {
		// TODO Auto-generated method stub
		List<Classes> classes=(List<Classes>) super.getAll(Classes.class);
		return classes;
	}

	@Override
	public List<Classes> getByTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		List<Classes> classes=new ArrayList<Classes>();
		classes=(List<Classes>) pageQuery("from Classes as c where c.teacher = ?", teacher);
		return classes;
	}
	
}
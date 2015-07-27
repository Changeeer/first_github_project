package com.ds.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.TeacherDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Teacher;

@Repository("TeacherDao")
public class TeacherDaoImpl extends BaseDao implements TeacherDao {

	@Override
	public void add(Teacher teacher) {
		// TODO Auto-generated method stub
		super.add(teacher);
	}

	@Override
	public Teacher getTeacherById(Long number) {
		// TODO Auto-generated method stub
		return (Teacher) super.getById(Teacher.class, number);
	}

	@Override
	public void update(Teacher teacher) {
		// TODO Auto-generated method stub
		super.update(teacher);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Teacher> getTeacherByNumAndPass(Teacher teacher) {
		// TODO Auto-generated method stub
		return (List<Teacher>) super.pageQuery("from Teacher as t where t.number = ? and t.password = ?", teacher.getNumber(),teacher.getPassword());
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Teacher> getAllTeacher() {
		// TODO Auto-generated method stub
		return (List<Teacher>) super.getAll(Teacher.class);
	}

}

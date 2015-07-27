package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.StatusDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Status;
import com.ds.model.Student;

@Repository("StatusDao")
public class StatusDaoImpl extends BaseDao implements StatusDao {

	@Override
	public void add(Status status) {
		// TODO Auto-generated method stub
		super.add(status);
	}

	@Override
	public void update(Status status) {
		// TODO Auto-generated method stub
		super.update(status);
	}

	@Override
	public void delete(Status status) {
		// TODO Auto-generated method stub
		super.delete(status);
	}

	@Override
	public Status getById(int id) {
		// TODO Auto-generated method stub
		return (Status) super.getById(Status.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Status> getByStudent(Student student) {
		// TODO Auto-generated method stub
		List<Status> status=new ArrayList<Status>();
		status=(List<Status>) pageQuery("from Status as s where s.student=?",student);
		return status;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Status> getByClasses(Classes classes) {
		// TODO Auto-generated method stub
		List<Status> status=new ArrayList<Status>();
		status=(List<Status>) pageQuery("from Status as s where s.classes=?",classes);
		return status;
	}

	@Override
	public List<Status> getByClassAndLesson(Classes classes, Lesson lesson) {
		// TODO Auto-generated method stub
		List<Status> status=new ArrayList<Status>();
		status=(List<Status>) pageQuery("from Status as s where s.classes=? and s.lesson=?",classes,lesson);
		return status;
	}

	@Override
	public List<Status> getByLesson(Lesson lesson) {
		// TODO Auto-generated method stub
		List<Status> status=new ArrayList<Status>();
		status=(List<Status>) pageQuery("from Status as s where s.lesson=?",lesson);
		return status;
	}

}

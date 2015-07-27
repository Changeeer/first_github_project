package com.ds.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.StudentDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Classes;
import com.ds.model.Student;

@Repository("StudentDao")
public class StudentDaoImpl extends BaseDao implements
		StudentDao {

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> getStudentByNumAndPass(Student student) {
		// TODO Auto-generated method stub
		List<Student> students = (List<Student>)pageQuery("from Student as s where s.number = ? and s.password = ?",student.getNumber(),student.getPassword());
		return students;
	}

	@Override
	public void add(Student student) {
		// TODO Auto-generated method stub
		super.add(student);
	}


	@Override
	public void update(Student student) {
		// TODO Auto-generated method stub
		super.update(student);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Student> getStudentByClasses(Classes classes) {
		// TODO Auto-generated method stub
		List<Student> students = (List<Student>)getHibernateTemplate().find("from Student as s where s.classes = ?",classes);
		return students;
	}

	@Override
	public Student getStudentById(Long number) {
		// TODO Auto-generated method stub
		return (Student) super.getById(Student.class, number);

	}

	@Override
	public List<Integer> getAllTotal() {
		// TODO Auto-generated method stub
		List<Integer> sum=(List<Integer>) pageQuery("select total from Student order by total DESC");
		return sum;
	}

}

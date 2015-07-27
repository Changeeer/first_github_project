package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.AnswerDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Answer;
import com.ds.model.Lesson;
import com.ds.model.Question;
import com.ds.model.Student;

@Repository("AnswerDao")
public class AnswerDaoImpl extends BaseDao implements AnswerDao {

	@Override
	public void add(Answer answer) {
		// TODO Auto-generated method stub
		super.add(answer);
	}

	@Override
	public void update(Answer answer) {
		// TODO Auto-generated method stub
		super.update(answer);
	}

	@Override
	public void delete(Answer answer) {
		// TODO Auto-generated method stub
		super.delete(answer);
	}

	@Override
	public Answer getById(Integer id) {
		// TODO Auto-generated method stub
		return (Answer) super.getById(Answer.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Answer> getByStudent(Student student) {
		// TODO Auto-generated method stub
		List<Answer> answers=new ArrayList<Answer>();
		answers=(List<Answer>) pageQuery("from Answer as a where a.student = ?", student);
		return answers;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Answer> getByStudentAndLesson(Student student, Lesson lesson) {
		// TODO Auto-generated method stub
		List<Answer> answers=new ArrayList<Answer>();
		answers=(List<Answer>) pageQuery("from Answer as a where a.student = ? and a.lesson = ?", student,lesson);
		return answers;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Answer> getByStudentAndQues(Student student, Question question) {
		// TODO Auto-generated method stub
		List<Answer> answers=new ArrayList<Answer>();
		answers=(List<Answer>) pageQuery("from Answer as a where a.student = ? and a.question = ?", student,question);
		return answers;
	}
	
	

}

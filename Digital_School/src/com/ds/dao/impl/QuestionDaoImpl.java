package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.QuestionDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Lesson;
import com.ds.model.Question;

@Repository("QuestionDao")
public class QuestionDaoImpl extends BaseDao implements QuestionDao {

	@Override
	public void add(Question question) {
		// TODO Auto-generated method stub
		super.add(question);
	}

	@Override
	public void delete(Question question) {
		// TODO Auto-generated method stub
		super.delete(question);
	}

	@Override
	public void update(Question question) {
		// TODO Auto-generated method stub
		super.update(question);
	}

	@Override
	public Question getQuestionById(Integer id) {
		// TODO Auto-generated method stub
		return (Question) super.getById(Question.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Question> getByLesson(Lesson lesson) {
		// TODO Auto-generated method stub
		List<Question> questions=new ArrayList<Question>();
		questions=(List<Question>) pageQuery("from Question as q where q.lesson = ?", lesson);
		return questions;
	}

}

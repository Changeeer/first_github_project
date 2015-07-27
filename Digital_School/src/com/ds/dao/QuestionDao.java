package com.ds.dao;

import java.util.List;

import com.ds.model.Lesson;
import com.ds.model.Question;

public interface QuestionDao {
	
	void add(Question question);
	
	void delete(Question question);
	
	void update(Question question);
	
	Question getQuestionById(Integer id);
	
	List<Question> getByLesson(Lesson lesson);
	
	
}

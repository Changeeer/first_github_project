package com.ds.dao;

import java.util.List;

import com.ds.model.Answer;
import com.ds.model.Lesson;
import com.ds.model.Question;
import com.ds.model.Student;

public interface AnswerDao {
	void add(Answer answer);
	
	void update(Answer answer);
	
	void delete(Answer answer);
	
	Answer getById(Integer id);
	
	List<Answer> getByStudent(Student student);
	
	List<Answer> getByStudentAndLesson(Student student,Lesson lesson);
	
	List<Answer> getByStudentAndQues(Student student,Question question);
}

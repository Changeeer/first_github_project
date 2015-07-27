package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.ScoreDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Score;
import com.ds.model.Student;

@Repository("ScoreDao")
public class ScoreDaoImpl extends BaseDao implements ScoreDao {

	@Override
	public void add(Score score) {
		// TODO Auto-generated method stub
		super.add(score);
	}

	@Override
	public void delete(Score score) {
		// TODO Auto-generated method stub
		delete(score);
	}

	@Override
	public void update(Score score) {
		// TODO Auto-generated method stub
		update(score);
	}

	@Override
	public Score getById(Long id) {
		// TODO Auto-generated method stub
		return (Score) super.getById(Score.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Score> getByStudent(Student student) {
		// TODO Auto-generated method stub
		List<Score> scores=new ArrayList<Score>();
		scores=(List<Score>) pageQuery("from Score as s where s.student = ?", student);
		return scores;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Score> getByClassAndLesson(Classes classes, Lesson lesson) {
		// TODO Auto-generated method stub
		List<Score> scores=new ArrayList<Score>();
		scores=(List<Score>) pageQuery("from Score as s where s.classes = ? and s.lesson=?", classes,lesson);
		return scores;
	}

	@Override
	public Score getByStuAndLesson(Student student, Lesson lesson) {
		// TODO Auto-generated method stub		
		return (Score)pageQuery("from Score as s where s.student = ? and s.lesson=?", student,lesson);
	}

}

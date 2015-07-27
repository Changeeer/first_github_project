package com.ds.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.LessonDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Lesson;

@Repository("LessonDao")
public class LessonDaoImpl extends BaseDao implements LessonDao{

	@Override
	public void add(Lesson lesson) {
		// TODO Auto-generated method stub
		super.add(lesson);
	}

	@Override
	public Lesson getLessonById(Integer id) {
		// TODO Auto-generated method stub
		return (Lesson) super.getById(Lesson.class, id);
	}

	@Override
	public void update(Lesson lesson) {
		// TODO Auto-generated method stub
		super.update(lesson);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Lesson> getAllLesson() {
		// TODO Auto-generated method stub
		return (List<Lesson>) super.getAll(Lesson.class);
	}
	
}
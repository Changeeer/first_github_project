package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.DisscusionDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Disscusion;
import com.ds.model.Lesson;
import com.ds.model.Student;

@Repository("DisscusionDao")
public class DisscusionDaoImpl extends BaseDao implements DisscusionDao {

	@Override
	public void add(Disscusion disscusion) {
		// TODO Auto-generated method stub
		super.add(disscusion);
	}

	@Override
	public void delete(Disscusion disscusion) {
		// TODO Auto-generated method stub
		super.delete(disscusion);
	}

	@Override
	public void update(Disscusion disscusion) {
		// TODO Auto-generated method stub
		super.update(disscusion);
	}

	@Override
	public Disscusion getById(Long id) {
		// TODO Auto-generated method stub
		return (Disscusion) super.getById(Disscusion.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Disscusion> getByPage(int PageSise, int Page) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=(List<Disscusion>)pageQuery("from Disscusion", Page, PageSise);
		return disscusions;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Disscusion> getLatestByLesson(Lesson lesson,int PageSise, int Page) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=(List<Disscusion>) pageQuery("from Disscusion as d where d.lesson = ? order by time DESC", Page,PageSise,lesson);
		return disscusions;
	}

	@Override
	public List<Disscusion> getByStudent(Long stu_num) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=(List<Disscusion>) pageQuery("from Disscusion as d where d.user_id = ?", stu_num);
		return disscusions;
	}

	@Override
	public long getStuDisNum(Long stu_num) {
		// TODO Auto-generated method stub
		List<Long> result=(List<Long>)pageQuery("select count(*) from Disscusion as d where d.user_id = ?", stu_num);
		return result.get(0);
	}

	@Override
	public List<Disscusion> getHotByLesson(Lesson lesson, int PageSise, int Page) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=(List<Disscusion>) pageQuery("from Disscusion as d where d.lesson = ? order by replynum DESC", Page,PageSise,lesson);
		return disscusions;
	}

	@Override
	public List<Disscusion> getCoolByLesson(Lesson lesson, int PageSise,
			int Page) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=(List<Disscusion>) pageQuery("from Disscusion as d where d.lesson = ? and d.replynum = 0 order by time DESC", Page,PageSise,lesson);
		return disscusions;
	}

}

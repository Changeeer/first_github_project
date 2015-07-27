package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.LessonDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Lesson;
import com.ds.service.LessonService;

@Service("LessonService")
public class LessonServiceImpl extends BaseDao implements LessonService{

	private LessonDao lessondao;
	
	public LessonDao getLessondao() {
		return lessondao;
	}
	@Resource(name="LessonDao")
	public void setLessondao(LessonDao lessondao) {
		this.lessondao = lessondao;
	}

	/**
	 * 增加课程
	 */
	@Override
	public void addLesson(Lesson lesson) {
		// TODO Auto-generated method stub
		lessondao.add(lesson);
	}

	/**
	 * 更新课程
	 */
	@Override
	public void updateLesson(Lesson lesson) {
		// TODO Auto-generated method stub
		lessondao.update(lesson);
	}

	/**
	 * 加载课程
	 */
	@Override
	public Lesson getlessonByid(int id) {
		// TODO Auto-generated method stub
		return lessondao.getLessonById(id);
	}

	/**
	 * 获取全部课程
	 */
	@Override
	public JSONObject allLessons() {
		// TODO Auto-generated method stub
		List<Lesson> lessons=new ArrayList<Lesson>();
		lessons=lessondao.getAllLesson();
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "answers","questions","scores","disscusions"    
        });
		jsonObject.element("lesson", lessons, config);
		return jsonObject;
	}
	
}
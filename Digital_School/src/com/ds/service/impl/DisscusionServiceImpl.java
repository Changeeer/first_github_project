package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.DisscusionDao;
import com.ds.dao.LessonDao;
import com.ds.dao.ReplyDao;
import com.ds.dao.StudentDao;
import com.ds.dao.TeacherDao;
import com.ds.model.Disscusion;
import com.ds.model.Lesson;
import com.ds.model.Teacher;
import com.ds.service.DisscusionService;
import com.ds.vo.DisscusionBean;

@Service("DisscusionService")
public class DisscusionServiceImpl implements DisscusionService {

	private DisscusionDao disscusionDao;
	private LessonDao lessonDao;
	private TeacherDao teacherDao;
	private StudentDao studentDao;
	private ReplyDao replyDao;

	public DisscusionDao getDisscusionDao() {
		return disscusionDao;
	}

	@Resource(name = "DisscusionDao")
	public void setDisscusionDao(DisscusionDao disscusionDao) {
		this.disscusionDao = disscusionDao;
	}

	public LessonDao getLessonDao() {
		return lessonDao;
	}

	@Resource(name = "LessonDao")
	public void setLessonDao(LessonDao lessonDao) {
		this.lessonDao = lessonDao;
	}

	public TeacherDao getTeacherDao() {
		return teacherDao;
	}

	@Resource(name = "TeacherDao")
	public void setTeacherDao(TeacherDao teacherDao) {
		this.teacherDao = teacherDao;
	}

	public StudentDao getStudentDao() {
		return studentDao;
	}

	@Resource(name = "StudentDao")
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	public ReplyDao getReplyDao() {
		return replyDao;
	}

	@Resource(name = "ReplyDao")
	public void setReplyDao(ReplyDao replyDao) {
		this.replyDao = replyDao;
	}

	@Override
	public void add(Disscusion disscusion, Long user_id, int lesson_id, int rank) {
		// TODO Auto-generated method stub
		Lesson lesson = lessonDao.getLessonById(lesson_id);
		if (rank == com.ds.controller.WebConstant.teh)
			disscusion.setIsTeacher(IS_TEACHER);
		else {
			disscusion.setIsTeacher(IS_NOT_TEACHER);
		}
		long time = System.currentTimeMillis() / 1000;
		disscusion.setTime(time);
		disscusion.setUser_id(user_id);
		disscusion.setLesson(lesson);
		disscusionDao.add(disscusion);
	}

	@Override
	public void delete(Long id) {
		// TODO Auto-generated method stub
		Disscusion disscusion = disscusionDao.getById(id);
		disscusionDao.delete(disscusion);
	}

	// 暂不用
	@Override
	public void update(Disscusion disscusion, int lesson_id) {
		// TODO Auto-generated method stub

	}

	@Override
	public JSONObject getByLessonId(int lesson_id, String type, int PageSise, int Page) {
		// TODO Auto-generated method stub
		List<Disscusion> disscusions = new ArrayList<Disscusion>();
		List<DisscusionBean> disscusionBeans = new ArrayList<DisscusionBean>();
		Lesson lesson = lessonDao.getLessonById(lesson_id);
		if(type.equals("cool")){
			disscusions=disscusionDao.getCoolByLesson(lesson, PageSise, Page);
		}		
		else if (type.equals("hot")) {
			disscusions=disscusionDao.getHotByLesson(lesson, PageSise, Page);
		}
		else {
			//最新讨论
			disscusions = disscusionDao.getLatestByLesson(lesson, PageSise, Page);
		}
		for (Disscusion d : disscusions) {
			String author = "";
			if (d.getIsTeacher() == 1)
				author = teacherDao.getTeacherById(d.getUser_id()).getName();
			else if (d.getIsTeacher() == 0)
				author = studentDao.getStudentById(d.getUser_id()).getName();
			String lastReply = replyDao.getByDisscusion(d).size() <= 0 ? ""
					: replyDao.getByDisscusion(d).get(0).getContent();
			DisscusionBean disscusionBean = new DisscusionBean(d.getId(),
					d.getTitle(), d.getContent(), author, d.getTime(),
					lastReply, d.getIsTeacher(), d.getReplynum(), d.getWatch());
			disscusionBeans.add(disscusionBean);
		}
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("disscusions", disscusionBeans);
		return jsonObject;
	}

}

package com.ds.service.impl;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.ClassesDao;
import com.ds.dao.LessonDao;
import com.ds.dao.ScoreDao;
import com.ds.dao.StudentDao;
import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Score;
import com.ds.model.Student;
import com.ds.service.ScoreService;
import com.ds.vo.LessonBean;
import com.ds.vo.ScoreBean;

@Service("ScoreService")
public class ScoreServiceImpl implements ScoreService {

	private ScoreDao scoreDao;
	private StudentDao studentDao;
	private LessonDao lessonDao;
	private ClassesDao classesDao;

	public ScoreDao getScoreDao() {
		return scoreDao;
	}

	@Resource(name = "ScoreDao")
	public void setScoreDao(ScoreDao scoreDao) {
		this.scoreDao = scoreDao;
	}

	public StudentDao getStudentDao() {
		return studentDao;
	}

	@Resource(name = "StudentDao")
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	public LessonDao getLessonDao() {
		return lessonDao;
	}

	@Resource(name = "LessonDao")
	public void setLessonDao(LessonDao lessonDao) {
		this.lessonDao = lessonDao;
	}

	public ClassesDao getClassesDao() {
		return classesDao;
	}

	@Resource(name = "ClassesDao")
	public void setClassesDao(ClassesDao classesDao) {
		this.classesDao = classesDao;
	}

	@Override
	public void add(int lesson_id, Long stu_num) {
		// TODO Auto-generated method stub
		Lesson lesson = lessonDao.getLessonById(lesson_id);
		Student student = studentDao.getStudentById(stu_num);
		Score score = new Score();
		score.setStudent(student);
		score.setLesson(lesson);
		score.setClasses(student.getClasses());
		scoreDao.add(score);

	}

	@Override
	public void delete(Long score_id) {
		// TODO Auto-generated method stub
		Score score = scoreDao.getById(score_id);
		scoreDao.delete(score);
	}

	@Override
	public void update(Long score_id, String type, int marks) {
		// TODO Auto-generated method stub
		Score score = scoreDao.getById(score_id);
		String temp = "set" + type;
		Method m;
		try {
			m = score.getClass().getDeclaredMethod(temp, int.class);
			m.invoke(score, marks);
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		scoreDao.update(score);
	}

	@Override
	public Long getByStuAndLesson(int lesson_id, Long stu_num) {
		// TODO Auto-generated method stub
		Student student = studentDao.getStudentById(stu_num);
		Lesson lesson = lessonDao.getLessonById(lesson_id);
		Score score = scoreDao.getByStuAndLesson(student, lesson);
		return score.getId();
	}

	@Override
	public JSONObject getByClassesAndLesson(int class_id, int lesson_id) {
		// TODO Auto-generated method stub
		List<Score> scores = new ArrayList<Score>();
		Classes classes = classesDao.getClassesById(class_id);
		Lesson lesson = lessonDao.getLessonById(lesson_id);
		scores = scoreDao.getByClassAndLesson(classes, lesson);
		JSONObject jsonObject = new JSONObject();
		JsonConfig config = new JsonConfig();
		config.setIgnoreDefaultExcludes(false);
		config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		config.setExcludes(new String[] {// 只要设置这个数组，指定过滤哪些字段。
		"lesson", "classes", "student" });
		jsonObject.element("scores", scores, config);
		return jsonObject;
	}

	@Override
	public JSONObject getByStudentId(Long stu_num) {
		// TODO Auto-generated method stub
		JSONObject jsonObject = new JSONObject();
		List<Score> scores = new ArrayList<Score>();
		List<ScoreBean> scoreBeans = new ArrayList<ScoreBean>();
		Student student = studentDao.getStudentById(stu_num);
		scores = scoreDao.getByStudent(student);
		for (Score score : scores) {
			ScoreBean scoreBean = new ScoreBean(score.getId(),
					score.getSingle(), score.getMultiple(),
					score.getPreThink(), score.getAftThink(),
					score.getShortAnswer(), score.getDataTreat(),
					score.getOperate(), new LessonBean(score.getLesson()
							.getId(), score.getLesson().getName()));
			scoreBeans.add(scoreBean);
		}
		jsonObject.element("scores", scoreBeans);
		return jsonObject;
	}

}

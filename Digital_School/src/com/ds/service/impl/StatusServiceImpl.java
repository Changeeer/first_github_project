package com.ds.service.impl;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.ClassesDao;
import com.ds.dao.LessonDao;
import com.ds.dao.StatusDao;
import com.ds.dao.StudentDao;
import com.ds.model.Classes;
import com.ds.model.Lesson;
import com.ds.model.Status;
import com.ds.model.Student;
import com.ds.service.StatusService;
import com.ds.vo.StatusBean;



@Service("StatusService")
public class StatusServiceImpl implements StatusService {

	private StatusDao statusDao;
	private StudentDao studentDao;
	private ClassesDao classesDao;
	private LessonDao lessonDao;
	
	public StatusDao getStatusDao() {
		return statusDao;
	}

	@Resource(name="StatusDao")
	public void setStatusDao(StatusDao statusDao) {
		this.statusDao = statusDao;
	}

	public StudentDao getStudentDao() {
		return studentDao;
	}

	@Resource(name="StudentDao")
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	public ClassesDao getClassesDao() {
		return classesDao;
	}

	@Resource(name="ClassesDao")
	public void setClassesDao(ClassesDao classesDao) {
		this.classesDao = classesDao;
	}
	
	public LessonDao getLessonDao() {
		return lessonDao;
	}
	@Resource(name="LessonDao")
	public void setLessonDao(LessonDao lessonDao) {
		this.lessonDao = lessonDao;
	}

	@Override
	public void add(Long stu_num) {
		// TODO Auto-generated method stub
		Status status = new Status();
		for(int i=1;i<=21;i++){
			String temp="setLesson"+Integer.toString(i, 10);
			Method m = null;
			try {
				m = status.getClass().getDeclaredMethod(temp, int.class);
			} catch (SecurityException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (NoSuchMethodException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			try {
				m.invoke(status, -1);
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
		}
		Student student=studentDao.getStudentById(stu_num);
		status.setStudent(student);
		status.setClasses(student.getClasses());
		statusDao.add(status);
	}

	@Override
	public void delete(int status_id) {
		// TODO Auto-generated method stub
		Status status=statusDao.getById(status_id);
		statusDao.delete(status);
	}

	@Override
	public void finishOrOpen(String lesson, int status_id,boolean sign) {
		// TODO Auto-generated method stub

		//statusDao.update(status);
	}

	@Override
	public void open(int lesson_id, int classes_id) {
		// TODO Auto-generated method stub
		Classes classes = classesDao.getClassesById(classes_id);
		Lesson lesson=lessonDao.getLessonById(lesson_id);
		List<Student> students=studentDao.getStudentByClasses(classes);
		//无则创建
		if(statusDao.getByClassAndLesson(classes, lesson).size()<=0){
			for (Student student : students) {
				Status status=new Status();
				status.setClasses(classes);
				status.setLesson(lesson);
				status.setState(-1);
				status.setStudent(student);
				statusDao.add(status);
			}
		}
		//开放课程
		for (Student student : students) {
			List<Status> status=statusDao.getByStudent(student);
			for (Status status2 : status) {
				status2.setState(0);
				statusDao.update(status2);
			}
		}
	}

	@Override
	public JSONObject getByStudentId(Long stu_id) {
		// TODO Auto-generated method stub
		JSONObject jsonObject=new JSONObject();
		List<Status> status=new ArrayList<Status>();
		List<StatusBean> statusBeans=new ArrayList<StatusBean>();
		Student student=studentDao.getStudentById(stu_id);
		status=statusDao.getByStudent(student);
		for (Status s : status) {
			int num=statusDao.getByLesson(s.getLesson()).size();
			StatusBean statusBean=new StatusBean(s.getId(), s.getState(), s.getLesson().getName(), num);
			statusBeans.add(statusBean);
		}
        jsonObject.put("status", statusBeans);
		return jsonObject;
	}

}

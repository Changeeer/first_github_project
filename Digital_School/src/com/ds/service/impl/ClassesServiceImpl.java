package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.ClassesDao;
import com.ds.dao.TeacherDao;
import com.ds.model.Classes;
import com.ds.model.Teacher;
import com.ds.service.ClassesService;


@Service("ClassesService")
public class ClassesServiceImpl implements ClassesService {

	private ClassesDao classesDao;
	private TeacherDao teacherDao;
	
	
	public TeacherDao getTeacherDao() {
		return teacherDao;
	}

	@Resource(name="TeacherDao")
	public void setTeacherDao(TeacherDao teacherDao) {
		this.teacherDao = teacherDao;
	}

	public ClassesDao getClassesDao() {
		return classesDao;
	}

	@Resource(name="ClassesDao")
	public void setClassesDao(ClassesDao classesDao) {
		this.classesDao = classesDao;
	}

	@Override
	public void addClasses(Classes classes) {
		// TODO Auto-generated method stub
		classesDao.add(classes);
	}

	@Override
	public void updateClasses(Classes classes,Long teacher_id) {
		// TODO Auto-generated method stub
		Teacher teacher=teacherDao.getTeacherById(teacher_id);
		Classes temp =classesDao.getClassesById(classes.getId());
		temp.setName(classes.getName());
		temp.setTeacher(teacher);
		classesDao.update(classes);
	}

	@Override
	public Classes getClassesByid(int id) {
		// TODO Auto-generated method stub
		return classesDao.getClassesById(id);
	}

	@Override
	public JSONObject allClasses() {
		// TODO Auto-generated method stub
		List<Classes> classes=new ArrayList<Classes>();
		classes=classesDao.getAllClasses();
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "answers","accuracies","scores","lessonStatus","students","teacher","status"    
        });
        jsonObject.element("classes", classes, config);
		return jsonObject;
	}

	@Override
	public JSONObject getByTeacherId(Long id) {
		// TODO Auto-generated method stub
		List<Classes> classes=new ArrayList<Classes>();
		Teacher teacher=teacherDao.getTeacherById(id);
		classes=classesDao.getByTeacher(teacher);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "answers","accuracies","scores","lessonStatus","students","teacher","status"    
        });
        jsonObject.element("classes", classes, config);
		return jsonObject;
	}

	

}

package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.AccuracyDao;
import com.ds.dao.ClassesDao;
import com.ds.dao.QuestionDao;
import com.ds.dao.StudentDao;
import com.ds.model.Accuracy;
import com.ds.model.Classes;
import com.ds.model.Question;
import com.ds.service.AccuracyService;

@Service("AccuracyService")
public class AccuracyServiceImpl implements AccuracyService {

	private AccuracyDao accuracyDao;
	private ClassesDao classesDao;
	private QuestionDao questionDao;
	private StudentDao studentDao;
	
	
	public StudentDao getStudentDao() {
		return studentDao;
	}

	@Resource(name="StudentDao")
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	public QuestionDao getQuestionDao() {
		return questionDao;
	}

	@Resource(name="QuestionDao")
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}

	public AccuracyDao getAccuracyDao() {
		return accuracyDao;
	}

	@Resource(name="AccuracyDao")
	public void setAccuracyDao(AccuracyDao accuracyDao) {
		this.accuracyDao = accuracyDao;
	}

	public ClassesDao getClassesDao() {
		return classesDao;
	}

	@Resource(name="ClassesDao")
	public void setClassesDao(ClassesDao classesDao) {
		this.classesDao = classesDao;
	}

	/**
	 * 删除正确率
	 */
	@Override
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		Accuracy accuracy=accuracyDao.getById(id);
		accuracyDao.delete(accuracy);
	}

	@Override
	public void add(Accuracy accuracy) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Accuracy accuracy) {
		// TODO Auto-generated method stub
		Accuracy temp=accuracyDao.getById(accuracy.getId());
		temp.setNumber(accuracy.getNumber());
		temp.setRight_num(accuracy.getRight_num());
		accuracyDao.update(temp);
	}

	@Override
	public JSONObject getByClassesId(int classesid) {
		// TODO Auto-generated method stub
		List<Accuracy> accuracies=new ArrayList<Accuracy>();
		Classes classes=classesDao.getClassesById(classesid);
		accuracies=accuracyDao.getByClasses(classes);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "classes","question"
        });
        jsonObject.element("accuracies", accuracies, config);
		return jsonObject;
	}

	@Override
	public JSONObject getByQuesstionId(int questionid) {
		// TODO Auto-generated method stub
		List<Accuracy> accuracies=new ArrayList<Accuracy>();
		Question question=questionDao.getQuestionById(questionid);
		accuracies=accuracyDao.getByQuestion(question);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "classes","question"
        });
        jsonObject.element("accuracies", accuracies, config);
		return jsonObject;
	}


	@Override
	public Accuracy getById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}

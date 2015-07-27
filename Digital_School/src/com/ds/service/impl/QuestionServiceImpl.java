package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.LessonDao;
import com.ds.dao.QuestionDao;
import com.ds.model.Lesson;
import com.ds.model.Question;
import com.ds.service.QuestionService;

@Service("QuestionService")
public class QuestionServiceImpl implements QuestionService {

	private QuestionDao questionDao;
	private LessonDao lessonDao;
	
	public QuestionDao getQuestionDao() {
		return questionDao;
	}

	@Resource(name="QuestionDao")
	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}

	public LessonDao getLessonDao() {
		return lessonDao;
	}

	@Resource(name="LessonDao")
	public void setLessonDao(LessonDao lessonDao) {
		this.lessonDao = lessonDao;
	}

	@Override
	public void add(Question question, int lesson_id) {
		// TODO Auto-generated method stub
		Lesson lesson=lessonDao.getLessonById(lesson_id);
		question.setLesson(lesson);
		questionDao.add(question);
	}
	
	//平均分处理环节
	@Override
	public void avgChange(int question_id,boolean sign) {
		// TODO Auto-generated method stub
		Question question=questionDao.getQuestionById(question_id);
		question.setNumber(question.getNumber()+1);
		if(sign)
			question.setRight_num(question.getRight_num()+1);
	}
	
	/**
	 * 更新
	 */
	@Override
	public void updateQuestion(Question question) {
		// TODO Auto-generated method stub
		Question temp = questionDao.getQuestionById(question.getId());
		temp.setContent(question.getContent());
		temp.setCorrect(question.getCorrect());
		temp.setType(question.getType());
		questionDao.update(temp);
		
	}

	@Override
	public void delete(int question_id) {
		// TODO Auto-generated method stub
		Question question=questionDao.getQuestionById(question_id);
		questionDao.delete(question);
	}


	@Override
	public JSONObject getByLessonId(int lesson_id,boolean sign) {
		// TODO Auto-generated method stub
		List<Question> questions=new ArrayList<Question>();		
		Lesson lesson=lessonDao.getLessonById(lesson_id);
		questions=questionDao.getByLesson(lesson);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
        if(sign)
        	config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
        			"accuracies","lesson","answers"
        	});	
        else {
        	config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
        			"accuracies","lesson","answers","correct"
        	});	
		}
        jsonObject.element("questions", questions, config);
		return jsonObject;
	}



}

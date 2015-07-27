package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.AnswerDao;
import com.ds.dao.QuestionDao;
import com.ds.dao.StudentDao;
import com.ds.model.Answer;
import com.ds.model.Question;
import com.ds.model.Student;
import com.ds.service.AnswerService;

@Service("AnswerService")
public class AnswerServiceImpl implements AnswerService {
	
	private AnswerDao answerDao;
	private StudentDao studentDao;
	private QuestionDao questionDao;
	

	public AnswerDao getAnswerDao() {
		return answerDao;
	}

	@Resource(name="AnswerDao")
	public void setAnswerDao(AnswerDao answerDao) {
		this.answerDao = answerDao;
	}

	
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

	@Override
	public void add(Answer answer, Long student_num, int question_id) {
		// TODO Auto-generated method stub
		Student student=studentDao.getStudentById(student_num);
		Question question=questionDao.getQuestionById(question_id);
		answer.setQuestion(question);
		answer.setStudent(student);
		answerDao.add(answer);

	}

	@Override
	public void update(Answer answer) {
		// TODO Auto-generated method stub
		Answer temp=answerDao.getById(answer.getId());
		temp.setScore(answer.getScore());
		answerDao.update(temp);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Answer answer=answerDao.getById(id);
		answerDao.delete(answer);
	}

	@Override
	public JSONObject getByQuesAndStuNum(int questionid, Long student_num) {
		// TODO Auto-generated method stub
		List<Answer> answers=new ArrayList<Answer>();
		Student student=studentDao.getStudentById(student_num);
		Question question=questionDao.getQuestionById(questionid);
		answers=answerDao.getByStudentAndQues(student, question);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "classes","question","student","lesson"
        });
        jsonObject.element("answers", answers, config);
		return jsonObject;
	}

}

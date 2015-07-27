package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Answer;

public interface AnswerService {

		public void add(Answer answer,Long student_num,int question_id);
		
		public void update(Answer answer);
		
		public void delete(int id);
		
		public JSONObject getByQuesAndStuNum(int questionid,Long student_num);
		
		
}

package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Question;

public interface QuestionService {
	
	public void add(Question question,int lesson_id);
	
	/**
	 * 题目更新
	 * @param question
	 */
	public void updateQuestion(Question question);
	
	/**
	 * 平均分处理
	 * @param question
	 */
	public void avgChange(int question_id,boolean sign);
	
	public void delete(int question_id);
	
	/**
	 * 根据课程id获取题目
	 * @param lesson_id
	 * @param sign 是否获取答案(true or false)
	 * @return	
	 */
	public JSONObject getByLessonId(int lesson_id,boolean sign);
}

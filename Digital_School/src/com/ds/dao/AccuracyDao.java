package com.ds.dao;

import java.util.List;

import com.ds.model.Accuracy;
import com.ds.model.Classes;
import com.ds.model.Question;

public interface AccuracyDao {

	void add(Accuracy accuracy);
	
	void update(Accuracy accuracy);
	
	void delete(Accuracy accuracy);
	
	Accuracy getById(Long id);
		
	List<Accuracy> getByClasses(Classes classes);
	
	List<Accuracy> getByQuestion(Question question);
	
}

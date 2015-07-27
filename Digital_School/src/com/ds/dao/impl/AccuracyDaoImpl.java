package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.AccuracyDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Accuracy;
import com.ds.model.Classes;
import com.ds.model.Question;

@Repository("AccuracyDao")
public class AccuracyDaoImpl extends BaseDao implements AccuracyDao {

	@Override
	public void add(Accuracy accuracy) {
		// TODO Auto-generated method stub
		super.add(accuracy);
	}

	@Override
	public void update(Accuracy accuracy) {
		// TODO Auto-generated method stub
		super.update(accuracy);
	}

	@Override
	public void delete(Accuracy accuracy) {
		// TODO Auto-generated method stub
		super.delete(accuracy);
	}

	@Override
	public Accuracy getById(Long id) {
		// TODO Auto-generated method stub
		return (Accuracy) super.getById(Accuracy.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Accuracy> getByClasses(Classes classes) {
		// TODO Auto-generated method stub
		List<Accuracy> accuracies=new ArrayList<Accuracy>();
		accuracies=(List<Accuracy>) pageQuery("from Accuracy as a where a.classes=?", classes);
		return accuracies;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Accuracy> getByQuestion(Question question) {
		// TODO Auto-generated method stub
		List<Accuracy> accuracies=new ArrayList<Accuracy>();
		accuracies=(List<Accuracy>) pageQuery("from Accuracy as a where a.question=?", question);
		return accuracies;
	}

}

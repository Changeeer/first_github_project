package com.ds.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.NewsDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.News;


@Repository("NewsDao")
public class NewsDaoImpl extends BaseDao
	implements NewsDao{

	@Override
	public void add(News news) {
		// TODO Auto-generated method stub
		super.add(news);
	}


	@SuppressWarnings("unchecked")
	@Override
	public List<News> getAllNews() {
		// TODO Auto-generated method stub
		return (List<News>) super.getAll(News.class);
	}


	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		super.deleteById(News.class, id);
	}

	

}
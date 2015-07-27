package com.ds.dao;


import java.util.List;

import com.ds.model.News;


public interface NewsDao{
	
	void add(News news);

	List<News> getAllNews();
	
	void delete(Integer id);
	
}
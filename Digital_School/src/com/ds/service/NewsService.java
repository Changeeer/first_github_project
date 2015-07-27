package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.News;

public interface NewsService {

	/**
	 * 添加一个成员
	 * 
	 * @param member
	 */
	public void addNews(News news);
	
	
	public JSONObject getLatestNews();
	
	public void deleteNews(Integer id);
}

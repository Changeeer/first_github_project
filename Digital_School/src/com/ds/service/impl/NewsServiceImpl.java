package com.ds.service.impl;

import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.NewsDao;
import com.ds.model.News;
import com.ds.service.NewsService;

@Service("NewsService")
public class NewsServiceImpl implements NewsService {

	private NewsDao newsdao;
	
	public NewsDao getNewsdao() {
		return newsdao;
	}
	
	@Resource(name="NewsDao")
	public void setNewsdao(NewsDao newsdao) {
		this.newsdao = newsdao;
	}

	@Override
	public void addNews(News news) {
		// TODO Auto-generated method stub
		long time = System.currentTimeMillis()/1000;
		news.setTime(time);
		newsdao.add(news);
	}

	@Override
	public JSONObject getLatestNews() {
		// TODO Auto-generated method stub
		List<News> newslist=newsdao.getAllNews();
		if(newslist==null)
			return null;
		News news=newslist.get(newslist.size()-1);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          //"id"
        });
        jsonObject.element("news", news, config);
		return jsonObject;
	}

	@Override
	public void deleteNews(Integer id) {
		// TODO Auto-generated method stub
		newsdao.delete(id);
	}

}

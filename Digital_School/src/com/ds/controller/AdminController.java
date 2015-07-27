package com.ds.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.News;
import com.ds.service.NewsService;



@Controller
@RequestMapping("/adm")
public class AdminController extends BaseController{

	
	
	public NewsService getNewsService() {
		return newsService;
	}
	
	@Resource
	public void setNewsService(NewsService newsService) {
		this.newsService = newsService;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}

	@RequestMapping(value="/AddNews",method = RequestMethod.POST)
	@ResponseBody
	public String addNews(News news){
		newsService.addNews(news);
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}
	/**
	 * 输出结果到response中
	 * @param response
	 * @param str
	 */
	private void output(HttpServletResponse response, String str) {
		try {
		    response.getOutputStream().write(str.getBytes("UTF-8") );
		    response.getOutputStream().flush();	
		}catch(Exception e) {
			throw new RuntimeException(e);
		}
	}

	
	
}

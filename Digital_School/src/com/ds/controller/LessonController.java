package com.ds.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.News;
import com.ds.service.LessonService;
import com.ds.service.NewsService;



@Controller
@RequestMapping("/lesson")
public class LessonController {
	
	private String tip;
	private JSONObject json=new JSONObject();
	private LessonService lessonService;


	public LessonService getLessonService() {
		return lessonService;
	}
	@Resource(name="LessonService")
	public void setLessonService(LessonService lessonService) {
		this.lessonService = lessonService;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
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

package com.ds.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.News;
import com.ds.service.ClassesService;
import com.ds.service.LessonService;
import com.ds.service.NewsService;



@Controller
@RequestMapping("/classes")
public class ClassesController {
	
	private String tip;
	private JSONObject json=new JSONObject();
	private ClassesService classesService;

	public ClassesService getClassesService() {
		return classesService;
	}
	@Resource(name="ClassesService")
	public void setClassesService(ClassesService classesService) {
		this.classesService = classesService;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}
	
	@RequestMapping(value="/GetAll",method = RequestMethod.GET)
	@ResponseBody
	public String getLessons(){
		json=classesService.allClasses();
		setTip("success");
		json.put("tip",tip);
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

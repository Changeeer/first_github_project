package com.ds.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.Student;
import com.ds.model.Teacher;
import com.ds.service.StudentService;
import com.ds.service.TeacherService;
import com.ds.vo.StudentBean;


@Controller
@RequestMapping("/teh")
public class TeacherController extends BaseController{
	
	@RequestMapping(value="/ChangePass",method=RequestMethod.POST)
	@ResponseBody
	public String stuChangePass(HttpSession session,String old_pass,String new_pass,String affirm_pass){
		json.clear();
		Long number=(Long)session.getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			setTip(teacherService.changePassword(number, old_pass, new_pass, affirm_pass));
		}
		json.put("tip", tip);
		return json.toString();
	}

	@RequestMapping(value="/GetTehClass",method=RequestMethod.GET)
	@ResponseBody
	public String tehGetHisClass(HttpServletRequest request){
		json.clear();
		Long number=(Long)request.getSession().getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			json=classesService.getByTeacherId(number);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/OpenLesson",method=RequestMethod.POST)
	@ResponseBody
	public String tehOpenLesson(HttpServletRequest request,int lesson_id,int class_id){
		json.clear();
		statusService.open(lesson_id, class_id);
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}
	
	
	
}

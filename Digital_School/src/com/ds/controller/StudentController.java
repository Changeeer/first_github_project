package com.ds.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.Disscusion;
import com.ds.model.Student;
import com.ds.vo.StudentBean;


@Controller
@RequestMapping("/stu")


public class StudentController extends BaseController{	
	
	
	@RequestMapping(value="/GetStatus",method=RequestMethod.GET)
	@ResponseBody
	public String stuGetStatus(HttpServletRequest request){
		json.clear();
		Long number=(Long) request.getSession().getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			json=statusService.getByStudentId(number);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/GetScores",method=RequestMethod.GET)
	@ResponseBody
	public String stuGetScore(HttpServletRequest request){
		json.clear();
		Long number=(Long) request.getSession().getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			json=scoreService.getByStudentId(number);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}

	/**
	 * 获取全部课程
	 * @return
	 */
	@RequestMapping(value = "/GetAllLes", method = RequestMethod.GET)
	@ResponseBody
	public String getLessons() {
		json.clear();
		json = lessonService.allLessons();
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/ChangePass",method=RequestMethod.POST)
	@ResponseBody
	public String stuChangePass(HttpSession session,String old_pass,String new_pass,String affirm_pass){
		json.clear();
		Long number=(Long)session.getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			setTip(studentService.changePassword(number, old_pass, new_pass, affirm_pass));
		}
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/AddLearnTime",method=RequestMethod.POST)
	@ResponseBody
	public String addLearnTime(HttpServletRequest request,Long time){
		json.clear();
		Long number=(Long) request.getSession().getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			studentService.addUpLearntime(number, time);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}
	

	@RequestMapping(value="/GetStuInfo",method=RequestMethod.GET)
	@ResponseBody
	public String stuGetInfo(HttpServletRequest request){
		json.clear();
		Long number=(Long) request.getSession().getAttribute("Number");
		if(number==null)
			setTip("fail");
		else {
			json=studentService.getStudentInfoByid(number);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/AddDiss",method=RequestMethod.POST)
	@ResponseBody
	public String addDisscusion(HttpServletRequest request,Disscusion disscusion,int lesson_id){
		json.clear();
		Long number=(Long) request.getSession().getAttribute("Number");
		int rank=(Integer) request.getSession().getAttribute("Rank");
		if(number==null)
			setTip("fail");
		else {
			disscusionService.add(disscusion, number, lesson_id, rank);
			setTip("success");
		}
		json.put("tip", tip);
		return json.toString();
	}
	
	@RequestMapping(value="/GetLastDiss",method=RequestMethod.POST)
	@ResponseBody
	public String getLastDiss(HttpServletRequest request,int lesson_id,String type,int pagesize,int page){
		json.clear();
		json=disscusionService.getByLessonId(lesson_id, type,pagesize, page);
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}
}

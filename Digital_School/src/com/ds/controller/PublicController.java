package com.ds.controller;

import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ds.model.Admin;
import com.ds.model.Student;
import com.ds.model.Teacher;

@Controller
@RequestMapping("/pub")
public class PublicController extends BaseController {

	/**
	 * 学生登陆
	 * 
	 * @param request
	 * @param student
	 * @return
	 */
	@RequestMapping(value = "/StuLogin", method = RequestMethod.POST)
	@ResponseBody
	public String stuLogin(HttpServletRequest request, Student student) {
		json.clear();
		if (studentService.login(student) == 1) {
			// 信息写入session
			request.getSession().setAttribute("Number", student.getNumber());
			request.getSession().setAttribute("Rank", WebConstant.stu);
			setTip("success");
		} else {
			setTip("fail");
		}
		if (tip == null) {
			System.out.println("null");
		}
		json.put("tip", tip);
		return json.toString();
	}

	/**
	 * 老师登陆
	 * 
	 * @param request
	 * @param teacher
	 * @return
	 */
	@RequestMapping(value = "/TehLogin", method = RequestMethod.POST)
	@ResponseBody
	public String tehLogin(HttpServletRequest request, Teacher teacher) {
		json.clear();
		if (teacherService.login(teacher) == 1) {

			request.getSession().setAttribute("Number", teacher.getNumber());
			request.getSession().setAttribute("Rank", WebConstant.teh);
			setTip("success");
		} else {
			setTip("fail");
		}
		json.put("tip", tip);
		return json.toString();
	}

	/**
	 * 管理员登陆
	 * 
	 * @param request
	 * @param admin
	 * @return
	 */
	@RequestMapping(value = "/AdmLogin", method = RequestMethod.POST)
	@ResponseBody
	public String admLogin(HttpServletRequest request, Admin admin) {
		json.clear();
		if (adminService.login(admin) == 1) {
			request.getSession().setAttribute("Number", admin.getId());
			request.getSession().setAttribute("Rank", WebConstant.adm);
			setTip("success");
		} else {
			setTip("fail");
		}
		json.put("tip", tip);
		return json.toString();
	}

	/**
	 * 获取公告
	 * 
	 * @return
	 */
	@RequestMapping(value = "/GetNews", method = RequestMethod.GET)
	@ResponseBody
	public String getNews() {
		json.clear();
		json = newsService.getLatestNews();
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}



	/**
	 * 退出登陆
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/Logout", method = RequestMethod.GET)
	@ResponseBody
	public String logout(HttpServletRequest request) {
		json.clear();
		Enumeration<String> em = request.getSession().getAttributeNames();
		while (em.hasMoreElements()) {
			request.getSession().removeAttribute(em.nextElement().toString());
		}
		setTip("success");
		json.put("tip", tip);
		return json.toString();
	}
}

package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.springframework.stereotype.Service;

import com.ds.dao.TeacherDao;
import com.ds.model.Teacher;
import com.ds.service.TeacherService;
import com.ds.vo.TeacherBean;

@Service("TeacherService")
public class TeacherServiceImpl implements TeacherService {

	private TeacherDao teacherdao;

	public TeacherDao getTeacherdao() {
		return teacherdao;
	}

	@Resource(name = "TeacherDao")
	public void setTeacherdao(TeacherDao teacherdao) {
		this.teacherdao = teacherdao;
	}

	
	
	
	//=================================================老师操作==
	/**
	 * 添加老师
	 */
	@Override
	public void addTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		teacherdao.add(teacher);
	}

	/**
	 * 老师登陆
	 */
	@Override
	public int login(Teacher teacher) {
		// TODO Auto-generated method stub
		if (teacherdao.getTeacherByNumAndPass(teacher).size() >= 1)
			return LOGIN_SUCC;
		else {
			return LOGIN_FAIL;
		}
	}

	/**
	 * 获取老师信息
	 */
	@Override
	public TeacherBean getTeacherInfoByid(Long id) {
		// TODO Auto-generated method stub
		Teacher teacher=teacherdao.getTeacherById(id);
		TeacherBean teacherBean=new TeacherBean(teacher.getNumber(), teacher.getName());
		return teacherBean;
	}

	/**
	 * 修改密码
	 */
	@Override
	public String changePassword(Long number, String old_pass, String new_pass1,String new_pass2) {
		// TODO Auto-generated method stub
		if (!new_pass1.equals(new_pass2))
			return "PASS_NOT_SAME";
		else {
			Teacher teacher=teacherdao.getTeacherById(number);
			if (!(old_pass.equals(teacher.getPassword())))
				return "PASS_ERROR";
			else {
				teacher.setPassword(new_pass1);
				teacherdao.update(teacher);
				return "success";
			}
		}
	}

	@Override
	public JSONObject allTeahcers() {
		// TODO Auto-generated method stub
		List<Teacher> teachers=new ArrayList<Teacher>();
		teachers=teacherdao.getAllTeacher();
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "classes","password"
        });
        jsonObject.element("teachers", teachers, config);
		return jsonObject;
	}

}

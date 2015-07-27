package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.omg.CORBA.PRIVATE_MEMBER;
import org.springframework.stereotype.Service;

import com.ds.dao.ClassesDao;
import com.ds.dao.DisscusionDao;
import com.ds.dao.LessonDao;
import com.ds.dao.ReplyDao;
import com.ds.dao.StudentDao;
import com.ds.model.Classes;
import com.ds.model.Student;
import com.ds.service.DisscusionService;
import com.ds.service.ReplyService;
import com.ds.service.StudentService;
import com.ds.vo.ClassesBean;
import com.ds.vo.StudentBean;
import com.sun.jndi.url.corbaname.corbanameURLContextFactory;

@Service("StudentService")
public class StudentServiceImpl implements StudentService {
	private StudentDao studentDao;
	private ClassesDao classesDao;
	private LessonDao lessonDao;
	private DisscusionDao disscusionDao;
	private ReplyDao replyDao;

	public LessonDao getLessonDao() {
		return lessonDao;
	}

	@Resource(name = "LessonDao")
	public void setLessonDao(LessonDao lessonDao) {
		this.lessonDao = lessonDao;
	}

	public StudentDao getStudentDao() {
		return studentDao;
	}

	@Resource(name = "StudentDao")
	public void setStudentDao(StudentDao studentDao) {
		this.studentDao = studentDao;
	}

	public ClassesDao getClassesDao() {
		return classesDao;
	}

	@Resource(name = "ClassesDao")
	public void setClassesDao(ClassesDao classesDao) {
		this.classesDao = classesDao;
	}

	public DisscusionDao getDisscusionDao() {
		return disscusionDao;
	}

	@Resource(name = "DisscusionDao")
	public void setDisscusionDao(DisscusionDao disscusionDao) {
		this.disscusionDao = disscusionDao;
	}

	public ReplyDao getReplyDao() {
		return replyDao;
	}

	@Resource(name = "ReplyDao")
	public void setReplyDao(ReplyDao replyDao) {
		this.replyDao = replyDao;
	}

	/**
	 * 添加学生
	 */
	@Override
	public void addStudent(Student student) {
		// TODO Auto-generated method stub
		studentDao.add(student);
	}

	/**
	 * 登陆
	 */
	public int login(Student student) {

		if (studentDao.getStudentByNumAndPass(student).size() >= 1)
			return LOGIN_SUCC;
		else {
			return LOGIN_FAIL;
		}

	}

	/**
	 * 学生信息
	 */
	public JSONObject getStudentInfoByid(Long id) {
		JSONObject jsonObject = new JSONObject();
		List<Integer> total = studentDao.getAllTotal();
		Student student = studentDao.getStudentById(id);
		long disscusion = disscusionDao.getStuDisNum(id);
		long reply = replyDao.getStuRpyNum(id);
		int ranking = new com.ds.util.Sort().binarySort(total, 0, total.size()-1,
				student.getTotal());
		//跳过0
		ranking++;
		StudentBean studentBean = new StudentBean(student.getNumber(),
				student.getName(), new ClassesBean(
						student.getClasses().getId(), student.getClasses()
								.getName()), student.getStatus(), disscusion,
				reply, student.getLearntime(), ranking);
		jsonObject.put("student", studentBean);
		return jsonObject;

	}

	/**
	 * 班级查找学生
	 */
	@Override
	public JSONObject getStudentsByClasses(int classes_id) {
		// TODO Auto-generated method stub
		Classes classes = classesDao.getClassesById(classes_id);
		List<Student> students = new ArrayList<Student>();
		students = studentDao.getStudentByClasses(classes);
		JSONObject jsonObject = new JSONObject();
		JsonConfig config = new JsonConfig();
		config.setIgnoreDefaultExcludes(false);
		config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);
		config.setExcludes(new String[] {// 只要设置这个数组，指定过滤哪些字段。
		"status", "classes", "answers", "lessonStatus", "password", "scores" });
		jsonObject.element("students", students, config);
		return jsonObject;
	}

	/**
	 * 修改密码
	 */
	@Override
	public String changePassword(Long number, String old_pass,
			String new_pass1, String new_pass2) {
		// TODO Auto-generated method stub
		if (!new_pass1.equals(new_pass2))
			return "PASS_NOT_SAME";
		else {
			Student student = studentDao.getStudentById(number);
			if (!(old_pass.equals(student.getPassword())))
				return "PASS_ERROR";
			else {
				student.setPassword(new_pass1);
				studentDao.update(student);
				return "success";
			}
		}
	}

	// 修改时间
	@Override
	public void addUpLearntime(Long number, Long time) {
		// TODO Auto-generated method stub
		Student student = studentDao.getStudentById(number);
		if (student.getLearntime() == null)
			student.setLearntime(0L);
		student.setLearntime(student.getLearntime() + time);
		studentDao.update(student);
	}

}

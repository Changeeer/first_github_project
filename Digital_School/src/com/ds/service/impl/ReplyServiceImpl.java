package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.DisscusionDao;
import com.ds.dao.ReplyDao;
import com.ds.dao.TeacherDao;
import com.ds.model.Disscusion;
import com.ds.model.Reply;
import com.ds.model.Teacher;
import com.ds.service.ReplyService;

@Service("ReplyService")
public class ReplyServiceImpl implements ReplyService {

	private ReplyDao replyDao;
	private DisscusionDao disscusionDao;
	private TeacherDao teacherDao;
	
	public ReplyDao getReplyDao() {
		return replyDao;
	}

	@Resource(name="ReplyDao")
	public void setReplyDao(ReplyDao replyDao) {
		this.replyDao = replyDao;
	}

	public DisscusionDao getDisscusionDao() {
		return disscusionDao;
	}

	@Resource(name="DisscusionDao")
	public void setDisscusionDao(DisscusionDao disscusionDao) {
		this.disscusionDao = disscusionDao;
	}

	public TeacherDao getTeacherDao() {
		return teacherDao;
	}

	@Resource(name="TeacherDao")
	public void setTeacherDao(TeacherDao teacherDao) {
		this.teacherDao = teacherDao;
	}
	
	@Override
	public void add(Reply reply, Long user_id, Long disscusion_id) {
		// TODO Auto-generated method stub
		Disscusion disscusion=disscusionDao.getById(disscusion_id);
		Teacher teacher=teacherDao.getTeacherById(user_id);
		if(teacher!=null)
			reply.setIsTeacher(IS_TEACHER);
		else {
			reply.setIsTeacher(IS_NOT_TEACHER);
		}
		long time = System.currentTimeMillis()/1000;
		reply.setUser_id(user_id);
		reply.setDisscusion(disscusion);
		reply.setTime(time);
		replyDao.add(reply);
	}

	@Override
	public void delete(Long reply_id) {
		// TODO Auto-generated method stub
		Reply reply=replyDao.getById(reply_id);
		replyDao.delete(reply);
	}

	@Override
	public JSONObject getByDisscusionId(Long disscusion_id) {
		// TODO Auto-generated method stub
		List<Reply> replies=new ArrayList<Reply>();
		Disscusion disscusion=disscusionDao.getById(disscusion_id);
		replies=replyDao.getByDisscusion(disscusion);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "disscusion"
        });
        jsonObject.element("replies", replies, config);
		return jsonObject;
	}

}

package com.ds.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import com.ds.dao.ReplyDao;
import com.ds.dao.RereplyDao;
import com.ds.dao.TeacherDao;
import com.ds.model.Reply;
import com.ds.model.Rereply;
import com.ds.model.Teacher;
import com.ds.service.RereplyService;

@Service("RereplyService")
public class RereplyServiceImpl implements RereplyService {

	private RereplyDao rereplyDao;
	private ReplyDao replyDao;
	private TeacherDao teacherDao;
	
	public RereplyDao getRereplyDao() {
		return rereplyDao;
	}

	@Resource(name="RereplyDao")
	public void setRereplyDao(RereplyDao rereplyDao) {
		this.rereplyDao = rereplyDao;
	}

	public ReplyDao getReplyDao() {
		return replyDao;
	}

	@Resource(name="ReplyDao")
	public void setReplyDao(ReplyDao replyDao) {
		this.replyDao = replyDao;
	}

	public TeacherDao getTeacherDao() {
		return teacherDao;
	}

	@Resource(name="TeacherDao")
	public void setTeacherDao(TeacherDao teacherDao) {
		this.teacherDao = teacherDao;
	}

	@Override
	public void add(Rereply rereply, Long user_id, Long reply_id) {
		// TODO Auto-generated method stub
		Reply reply=replyDao.getById(reply_id);
		Teacher teacher=teacherDao.getTeacherById(user_id);
		if(teacher!=null)
			reply.setIsTeacher(IS_TEACHER);
		else {
			reply.setIsTeacher(IS_NOT_TEACHER);
		}
		long time = System.currentTimeMillis()/1000;
		rereply.setUser_id(user_id);
		rereply.setTime(time);
		rereply.setReply(reply);
		rereplyDao.add(rereply);
	}

	@Override
	public void delete(Long rereply_id) {
		// TODO Auto-generated method stub
		Rereply rereply=rereplyDao.getById(rereply_id);
		rereplyDao.delete(rereply);
	}

	@Override
	public JSONObject getByReplyId(Long reply_id) {
		// TODO Auto-generated method stub
		List<Rereply> rereplies=new ArrayList<Rereply>();
		Reply reply=replyDao.getById(reply_id);
		rereplies=rereplyDao.getByreply(reply);
		JSONObject jsonObject=new JSONObject();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "reply"
        });
        jsonObject.element("rereplies", rereplies, config);
		return jsonObject;
	}

}

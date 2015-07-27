package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.ReplyDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Disscusion;
import com.ds.model.Reply;

@Repository("ReplyDao")
public class ReplyDaoImpl extends BaseDao implements ReplyDao {
	
	@Override
	public void add(Reply reply) {
		// TODO Auto-generated method stub
		super.add(reply);
	}

	@Override
	public void delete(Reply reply) {
		// TODO Auto-generated method stub
		super.delete(reply);
	}

	@Override
	public void update(Reply reply) {
		// TODO Auto-generated method stub
		super.update(reply);
	}

	@Override
	public Reply getById(Long id) {
		// TODO Auto-generated method stub
		return (Reply) super.getById(Reply.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Reply> getByDisscusion(Disscusion disscusion) {
		// TODO Auto-generated method stub
		List<Reply> replies =new ArrayList<Reply>();
		replies=(List<Reply>) pageQuery("from Reply as r where r.disscusion = ? order by time", disscusion);
		return replies;
	}

	@Override
	public List<Reply> getByStudentNum(Long stu_num) {
		// TODO Auto-generated method stub
		List<Reply> replies =new ArrayList<Reply>();
		replies=(List<Reply>) pageQuery("from Reply as r where r.user_id = ? order by time", stu_num);
		return replies;
	}

	@Override
	public long getStuRpyNum(Long stu_num) {
		// TODO Auto-generated method stub
		List<Long> result=(List<Long>)pageQuery("select count(*) from Reply as r where r.user_id = ?", stu_num);
		return result.get(0);
	}

}

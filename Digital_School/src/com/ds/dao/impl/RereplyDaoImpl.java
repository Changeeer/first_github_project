package com.ds.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ds.dao.RereplyDao;
import com.ds.dao.common.BaseDao;
import com.ds.model.Reply;
import com.ds.model.Rereply;

@Repository("RereplyDao")
public class RereplyDaoImpl extends BaseDao implements RereplyDao {

	@Override
	public void add(Rereply rereply) {
		// TODO Auto-generated method stub
		super.add(rereply);
	}

	@Override
	public void delete(Rereply rereply) {
		// TODO Auto-generated method stub
		super.delete(rereply);
	}

	@Override
	public void update(Rereply rereply) {
		// TODO Auto-generated method stub
		super.update(rereply);
	}

	@Override
	public Rereply getById(Long id) {
		// TODO Auto-generated method stub
		return (Rereply) super.getById(Rereply.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Rereply> getByreply(Reply reply) {
		// TODO Auto-generated method stub
		List<Rereply> rereplies=new ArrayList<Rereply>();
		rereplies=(List<Rereply>) pageQuery("from Rereply as r where r.reply=?", reply);
		return rereplies;
	}

}

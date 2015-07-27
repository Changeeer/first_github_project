package com.ds.dao;

import java.util.List;

import com.ds.model.Reply;
import com.ds.model.Rereply;

public interface RereplyDao {
	
	void add(Rereply rereply);
	
	void delete(Rereply rereply);
	
	void update(Rereply rereply);
	
	Rereply getById(Long id);
	
	List<Rereply> getByreply(Reply reply);
}

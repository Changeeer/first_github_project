package com.ds.dao;

import java.util.List;

import com.ds.model.Disscusion;
import com.ds.model.Reply;

public interface ReplyDao {
	void add(Reply reply);
	
	void delete(Reply reply);
	
	void update(Reply reply);
	
	Reply getById(Long id);
	
	List<Reply> getByDisscusion(Disscusion disscusion);

	List<Reply> getByStudentNum(Long stu_num);
	
	long getStuRpyNum(Long stu_num);
}

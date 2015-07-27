package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Reply;

public interface ReplyService {
	

	public static final int IS_TEACHER = 1;
	public static final int IS_NOT_TEACHER = 0;	
	
	public void add(Reply reply,Long user_id,Long  disscusion_id);
	
	public void delete(Long reply_id);
	
	public JSONObject getByDisscusionId(Long disscusion_id);
	
	
}

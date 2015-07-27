package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Rereply;

public interface RereplyService {
	
	public static final int IS_TEACHER = 1;
	public static final int IS_NOT_TEACHER = 0;
	
	public void add(Rereply rereply,Long user_id,Long reply_id);
	
	public void delete(Long rereply_id);
	
	public JSONObject getByReplyId(Long reply_id);
}

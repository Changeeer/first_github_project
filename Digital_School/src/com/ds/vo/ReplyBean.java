package com.ds.vo;

public class ReplyBean{


	private Long id;
	private String content;
	private Long time;
	private int user_id;
	private int isTeacher = 0;
	public ReplyBean() {
		super();
	}
	public ReplyBean(Long id, String content, Long time, int user_id,
			int isTeacher) {
		super();
		this.id = id;
		this.content = content;
		this.time = time;
		this.user_id = user_id;
		this.isTeacher = isTeacher;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Long getTime() {
		return time;
	}
	public void setTime(Long time) {
		this.time = time;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getIsTeacher() {
		return isTeacher;
	}
	public void setIsTeacher(int isTeacher) {
		this.isTeacher = isTeacher;
	}



}

package com.ds.vo;

public class StatusBean {
	
	private Integer id;
	private Integer state;
	private String lesson;
	private Integer num;
	public StatusBean(Integer id, Integer state, String lesson, Integer num) {
		super();
		this.id = id;
		this.state = state;
		this.lesson = lesson;
		this.num = num;
	}
	public StatusBean() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public String getLesson() {
		return lesson;
	}
	public void setLesson(String lesson) {
		this.lesson = lesson;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	
	
}

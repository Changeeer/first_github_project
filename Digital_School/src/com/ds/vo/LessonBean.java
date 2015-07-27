package com.ds.vo;

public class LessonBean{


	
	private Integer id;
	private String name;
	public LessonBean(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public LessonBean() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}


	
}
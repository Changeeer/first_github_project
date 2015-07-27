package com.ds.vo;

public class TeacherBean {
	private Long number;
	private String name;
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public TeacherBean() {
		super();
	}
	public TeacherBean(Long number, String name) {
		super();
		this.number = number;
		this.name = name;
	}
	@Override
	public String toString() {
		return "TeacherBean [number=" + number + ", name=" + name + "]";
	}
	
	
}

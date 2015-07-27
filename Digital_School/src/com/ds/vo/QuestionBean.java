package com.ds.vo;


public class QuestionBean{


	
	private Integer id;
	private String type;
	private String content;
	private String correct;
	private int number=0;
	private int right_num=0;
	public QuestionBean() {
		super();
	}
	public QuestionBean(Integer id, String type, String content,
			String correct, int number, int right_num) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
		this.correct = correct;
		this.number = number;
		this.right_num = right_num;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getCorrect() {
		return correct;
	}
	public void setCorrect(String correct) {
		this.correct = correct;
	}
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	public int getRight_num() {
		return right_num;
	}
	public void setRight_num(int right_num) {
		this.right_num = right_num;
	}

	
}
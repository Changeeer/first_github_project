package com.ds.vo;

public class AccuracyBean{

	private Integer id;
	private int number=0;
	private int right_num=0;
	private ClassesBean classesbean;
	private QuestionBean questionBean;
	public AccuracyBean(Integer id, int number, int right_num,
			ClassesBean classesbean, QuestionBean questionBean) {
		super();
		this.id = id;
		this.number = number;
		this.right_num = right_num;
		this.classesbean = classesbean;
		this.questionBean = questionBean;
	}
	public AccuracyBean() {
		super();
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public ClassesBean getClassesbean() {
		return classesbean;
	}
	public void setClassesbean(ClassesBean classesbean) {
		this.classesbean = classesbean;
	}
	public QuestionBean getQuestionBean() {
		return questionBean;
	}
	public void setQuestionBean(QuestionBean questionBean) {
		this.questionBean = questionBean;
	}

	


	
}

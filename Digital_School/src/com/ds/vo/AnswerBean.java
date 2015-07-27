package com.ds.vo;

public class AnswerBean{


	private Integer id;
	private String type;
	private String content;
	private int score=0;
	private StudentBean studentBean;
	private LessonBean lessonBean;
	private QuestionBean questionBean;
	private ClassesBean classesBean;
	public AnswerBean(Integer id, String type, String content, int score,
			StudentBean studentBean, LessonBean lessonBean,
			QuestionBean questionBean, ClassesBean classesBean) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
		this.score = score;
		this.studentBean = studentBean;
		this.lessonBean = lessonBean;
		this.questionBean = questionBean;
		this.classesBean = classesBean;
	}
	public AnswerBean() {
		super();
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
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public StudentBean getStudentBean() {
		return studentBean;
	}
	public void setStudentBean(StudentBean studentBean) {
		this.studentBean = studentBean;
	}
	public LessonBean getLessonBean() {
		return lessonBean;
	}
	public void setLessonBean(LessonBean lessonBean) {
		this.lessonBean = lessonBean;
	}
	public QuestionBean getQuestionBean() {
		return questionBean;
	}
	public void setQuestionBean(QuestionBean questionBean) {
		this.questionBean = questionBean;
	}
	public ClassesBean getClassesBean() {
		return classesBean;
	}
	public void setClassesBean(ClassesBean classesBean) {
		this.classesBean = classesBean;
	}
	
	
}

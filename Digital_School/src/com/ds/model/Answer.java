package com.ds.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="t_answer")
public class Answer implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String type;
	private String content;
	private int score=0;
	private Student student;
	private Lesson lesson;
	private Question question;
	private Classes classes;
	public Answer() {
		super();
	}
	public Answer(Integer id, String type, String content, int score,
			Student student, Lesson lesson, Question question, Classes classes) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
		this.score = score;
		this.student = student;
		this.lesson = lesson;
		this.question = question;
		this.classes = classes;
	}
	@Id
	@Column(name="answer_id")
	@GeneratedValue
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@Column(name="_type",length=20)
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Column(name="_content",length=500)
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Column(name="_score")
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="student_number")
	
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="lesson_id")
	public Lesson getLesson() {
		return lesson;
	}
	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="question_id")
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="classes_id")
	public Classes getClasses() {
		return classes;
	}
	public void setClasses(Classes classes) {
		this.classes = classes;
	}
	
	
}

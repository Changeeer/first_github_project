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
@Table(name="t_status")
public class Status implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private Integer state;
	private Classes classes;
	private Student student;
	private Lesson lesson;
	public Status() {
		super();
	}

	
	public Status(Integer id, Integer state, Classes classes, Student student,
			Lesson lesson) {
		super();
		this.id = id;
		this.state = state;
		this.classes = classes;
		this.student = student;
		this.lesson = lesson;
	}


	@Id
	@Column(name="status_id")
	@GeneratedValue
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@Column(name="state")
	public Integer getState() {
		return state;
	}	
	public void setState(Integer state) {
		this.state = state;
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
	@JoinColumn(name="classes_id")
	public Classes getClasses() {
		return classes;
	}
	public void setClasses(Classes classes) {
		this.classes = classes;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="student_number")
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	
	
}

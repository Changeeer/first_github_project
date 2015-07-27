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
@Table(name="t_score")
public class Score implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private int single=0;
	private int multiple=0;
	private int preThink=0;
	private int aftThink=0;
	private int shortAnswer=0;
	private int dataTreat=0;
	private int operate=0;
	private Student student;
	private Lesson lesson;
	private Classes classes;
	public Score() {
		super();
	}
	public Score(Long id, int single, int multiple, int preThink,
			int aftThink, int shortAnswer, int dataTreat, int operate,
			Student student, Lesson lesson, Classes classes) {
		super();
		this.id = id;
		this.single = single;
		this.multiple = multiple;
		this.preThink = preThink;
		this.aftThink = aftThink;
		this.shortAnswer = shortAnswer;
		this.dataTreat = dataTreat;
		this.operate = operate;
		this.student = student;
		this.lesson = lesson;
		this.classes = classes;
	}
	@Id
	@Column(name="score_id")
	@GeneratedValue
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="_single",length=4)
	public int getSingle() {
		return single;
	}
	public void setSingle(int single) {
		this.single = single;
	}
	@Column(name="_multiple",length=4)
	public int getMultiple() {
		return multiple;
	}
	public void setMultiple(int multiple) {
		this.multiple = multiple;
	}
	@Column(name="_prethink",length=4)
	public int getPreThink() {
		return preThink;
	}
	public void setPreThink(int preThink) {
		this.preThink = preThink;
	}
	@Column(name="_aftthink",length=4)
	public int getAftThink() {
		return aftThink;
	}
	public void setAftThink(int aftThink) {
		this.aftThink = aftThink;
	}
	@Column(name="_shortanswer",length=4)
	public int getShortAnswer() {
		return shortAnswer;
	}
	public void setShortAnswer(int shortAnswer) {
		this.shortAnswer = shortAnswer;
	}
	@Column(name="_datatreat",length=4)
	public int getDataTreat() {
		return dataTreat;
	}
	public void setDataTreat(int dataTreat) {
		this.dataTreat = dataTreat;
	}
	@Column(name="_operate",length=4)
	public int getOperate() {
		return operate;
	}
	public void setOperate(int operate) {
		this.operate = operate;
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
	@JoinColumn(name="classes_id")
	public Classes getClasses() {
		return classes;
	}
	public void setClasses(Classes classes) {
		this.classes = classes;
	}
	
	
}

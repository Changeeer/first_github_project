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
@Table(name="t_accuracy")
public class Accuracy implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private int number=0;
	private int right_num=0;
	private Classes classes;
	private Question question;
	public Accuracy() {
		super();
	}
	public Accuracy(Long id, int number, int right_num, Classes classes,
			Question question) {
		super();
		this.id = id;
		this.number = number;
		this.right_num = right_num;
		this.classes = classes;
		this.question = question;
	}
	
	@Id
	@Column(name="accuracy_id")
	@GeneratedValue
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(name="_number")
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}
	
	@Column(name="_right_num")
	public int getRight_num() {
		return right_num;
	}
	public void setRight_num(int right_num) {
		this.right_num = right_num;
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
	@JoinColumn(name="question_id")
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	
	
}

package com.ds.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="t_question")
public class Question implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String type;
	private String content;
	private String correct;
	private int number=0;
	private int right_num=0;
	private Lesson lesson;
	private Set<Accuracy> accuracies =new HashSet<Accuracy>();
	private Set<Answer> answers = new HashSet<Answer>();
	public Question() {
		super();
	}
	public Question(Integer id, String type, String content, String correct,
			int number, int right_num, Lesson lesson, Set<Accuracy> accuracies,
			Set<Answer> answers) {
		super();
		this.id = id;
		this.type = type;
		this.content = content;
		this.correct = correct;
		this.number = number;
		this.right_num = right_num;
		this.lesson = lesson;
		this.accuracies = accuracies;
		this.answers = answers;
	}
	@Id
	@Column(name="question_id")
	@GeneratedValue
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@Column(name="_type",length=10)
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Column(name="_content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Column(name="_correct")
	public String getCorrect() {
		return correct;
	}
	public void setCorrect(String correct) {
		this.correct = correct;
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
	@JoinColumn(name="lesson_id")
	public Lesson getLesson() {
		return lesson;
	}
	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}
	@OneToMany(mappedBy="question",cascade={CascadeType.ALL})
	@JoinColumn(name="question_id")
	public Set<Accuracy> getAccuracies() {
		return accuracies;
	}
	public void setAccuracies(Set<Accuracy> accuracies) {
		this.accuracies = accuracies;
	}
	@OneToMany(mappedBy="question",cascade={CascadeType.ALL})
	@JoinColumn(name="question_id")
	public Set<Answer> getAnswers() {
		return answers;
	}
	public void setAnswers(Set<Answer> answers) {
		this.answers = answers;
	}
	
	
}
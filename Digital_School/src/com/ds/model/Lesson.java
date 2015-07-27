package com.ds.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="t_lesson")
public class Lesson implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String name;
	private Set<Disscusion> disscusions=new HashSet<Disscusion>();
	private Set<Question> questions=new HashSet<Question>();
	private Set<Answer> answers=new HashSet<Answer>();
	private Set<Score> scores=new HashSet<Score>();
	private Set<Status> status=new HashSet<Status>();
	public Lesson() {
		super();
	}



	public Lesson(Integer id, String name, Set<Disscusion> disscusions,
			Set<Question> questions, Set<Answer> answers, Set<Score> scores,
			Set<Status> status) {
		super();
		this.id = id;
		this.name = name;
		this.disscusions = disscusions;
		this.questions = questions;
		this.answers = answers;
		this.scores = scores;
		this.status = status;
	}



	@Id
	@Column(name="lesson_id")
	@GeneratedValue
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	@Column(name="_name",length=20)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@OneToMany(mappedBy="lesson",cascade={CascadeType.ALL})
	@JoinColumn(name="lesson_id")
	public Set<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(Set<Question> questions) {
		this.questions = questions;
	}
	@OneToMany(mappedBy="lesson",cascade={CascadeType.ALL})
	@JoinColumn(name="lesson_id")
	public Set<Answer> getAnswers() {
		return answers;
	}
	public void setAnswers(Set<Answer> answers) {
		this.answers = answers;
	}
	@OneToMany(mappedBy="lesson",cascade={CascadeType.ALL})
	@JoinColumn(name="lesson_id")
	public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}
	@OneToMany(mappedBy="lesson",cascade={CascadeType.ALL})
	@JoinColumn(name="lesson_id")
	public Set<Disscusion> getDisscusions() {
		return disscusions;
	}
	public void setDisscusions(Set<Disscusion> disscusions) {
		this.disscusions = disscusions;
	}
	@OneToMany(mappedBy="lesson",cascade={CascadeType.ALL})
	@JoinColumn(name="lesson_id")
	public Set<Status> getStatus() {
		return status;
	}
	public void setStatus(Set<Status> status) {
		this.status = status;
	}



	@Override
	public String toString() {
		return "Lesson [id=" + id + ", name=" + name + "]";
	}

	
	
}
package com.ds.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="t_student")
public class Student implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long number;
	private String password;
	private String name;
	private int status=0;
	private Long learntime=0L;
	private Integer total=0;
	private Classes classes;
	private Set<Answer> answers =new HashSet<Answer>();
	private Set<Score> scores =new HashSet<Score>();
	private Set<Status> lessonStatus =new HashSet<Status>();
	public Student() {
		super();
	}
	
	public Student(Long number, String password, String name, int status,
			Long learntime, Integer total, Classes classes, Set<Answer> answers,
			Set<Score> scores, Set<Status> lessonStatus) {
		super();
		this.number = number;
		this.password = password;
		this.name = name;
		this.status = status;
		this.learntime = learntime;
		this.total = total;
		this.classes = classes;
		this.answers = answers;
		this.scores = scores;
		this.lessonStatus = lessonStatus;
	}

	@Id
	@Column(name="student_number")
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long i) {
		this.number = i;
	}
	@Column(name="_password",length=20)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name="_name",length=10)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Column(name="_status",length=4)
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@Column(name="_learntime")
	public Long getLearntime() {
		return learntime;
	}
	public void setLearntime(Long learntime) {
		this.learntime = learntime;
	}
	@Column(name="_total")
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="classes_id")
	public Classes getClasses() {
		return classes;
	}
	public void setClasses(Classes classes) {
		this.classes = classes;
	}
	@OneToMany(mappedBy="student",cascade={CascadeType.ALL})
	@JoinColumn(name="student_number")
	public Set<Answer> getAnswers() {
		return answers;
	}
	public void setAnswers(Set<Answer> answers) {
		this.answers = answers;
	}
	@OneToMany(mappedBy="student",cascade={CascadeType.ALL})
	@JoinColumn(name="student_number")
	public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}
	@OneToMany(mappedBy="student",cascade={CascadeType.ALL})
	@JoinColumn(name="student_number")
	public Set<Status> getLessonStatus() {
		return lessonStatus;
	}
	public void setLessonStatus(Set<Status> lessonStatus) {
		this.lessonStatus = lessonStatus;
	}


	@Override
	public String toString() {
		return "Student [number=" + number + ", password=" + password
				+ ", name=" + name + ", status=" + status + ", classes="
				+ classes + "]";
	}






	
	
	
}
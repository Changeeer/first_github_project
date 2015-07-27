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
@Table(name="t_classes")
public class Classes implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String name;
	private Teacher teacher;
	private Set<Student> students = new HashSet<Student>();
	private Set<Accuracy> accuracies =new HashSet<Accuracy>();
	private Set<Answer> answers = new HashSet<Answer>();
	private Set<Score> scores =new HashSet<Score>();
	private Set<Status> lessonStatus = new HashSet<Status>();
	public Classes() {
		super();
	}
	public Classes(Integer id, String name, Teacher teacher,
			Set<Student> students, Set<Accuracy> accuracies,
			Set<Answer> answers, Set<Score> scores,
			Set<Status> lessonStatus) {
		super();
		this.id = id;
		this.name = name;
		this.teacher = teacher;
		this.students = students;
		this.accuracies = accuracies;
		this.answers = answers;
		this.scores = scores;
		this.lessonStatus = lessonStatus;
	}
	@Id
	@Column(name="classes_id")
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
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="teacher_number")
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	@OneToMany(mappedBy="classes",cascade={CascadeType.ALL})
	@JoinColumn(name="classes_id")
	public Set<Student> getStudents() {
		return students;
	}
	public void setStudents(Set<Student> students) {
		this.students = students;
	}
	@OneToMany(mappedBy="classes",cascade={CascadeType.ALL})
	@JoinColumn(name="classes_id")
	public Set<Accuracy> getAccuracies() {
		return accuracies;
	}
	public void setAccuracies(Set<Accuracy> accuracies) {
		this.accuracies = accuracies;
	}
	@OneToMany(mappedBy="classes",cascade={CascadeType.ALL})
	@JoinColumn(name="classes_id")
	public Set<Answer> getAnswers() {
		return answers;
	}
	public void setAnswers(Set<Answer> answers) {
		this.answers = answers;
	}
	@OneToMany(mappedBy="classes",cascade={CascadeType.ALL})
	@JoinColumn(name="classes_id")
	public Set<Score> getScores() {
		return scores;
	}
	public void setScores(Set<Score> scores) {
		this.scores = scores;
	}
	@OneToMany(mappedBy="classes",cascade={CascadeType.ALL})
	@JoinColumn(name="classes_id")
	public Set<Status> getLessonStatus() {
		return lessonStatus;
	}
	public void setLessonStatus(Set<Status> lessonStatus) {
		this.lessonStatus = lessonStatus;
	}
	@Override
	public String toString() {
		return "Classes [id=" + id + ", name=" + name  + "]";
	}

	
	
}
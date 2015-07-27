package com.ds.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="t_teacher")
public class Teacher implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long number;
	private String password;
	private String name;
	private Set<Classes> classes =new HashSet<Classes>();
	
	public Teacher() {
		super();
	}
	public Teacher(Long number, String password, String name,
			Set<Classes> classes) {
		super();
		this.number = number;
		this.password = password;
		this.name = name;
		this.classes = classes;
	}
	@Id
	@Column(name="teacher_number")
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
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
	@OneToMany(mappedBy="teacher",cascade={CascadeType.ALL})
	@JoinColumn(name="teacher_number")
	public Set<Classes> getClasses() {
		return classes;
	}
	public void setClasses(Set<Classes> classes) {
		this.classes = classes;
	}
	
	
	
}
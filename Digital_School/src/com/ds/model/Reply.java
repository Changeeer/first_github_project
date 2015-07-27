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
@Table(name = "t_reply")
public class Reply implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	private String content;
	private Long time;
	private Long user_id;
	private int isTeacher = 0;
	private Disscusion disscusion;
	private Set<Rereply> rereplies = new HashSet<Rereply>();

	public Reply() {
		super();
	}



	public Reply(Long id, String content, Long time, Long user_id,
			int isTeacher, Disscusion disscusion, Set<Rereply> rereplies) {
		super();
		this.id = id;
		this.content = content;
		this.time = time;
		this.user_id = user_id;
		this.isTeacher = isTeacher;
		this.disscusion = disscusion;
		this.rereplies = rereplies;
	}



	@Id
	@Column(name = "reply_id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "_content", length = 500)
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Column(name = "_time")
	public Long getTime() {
		return time;
	}

	public void setTime(Long time) {
		this.time = time;
	}

	@Column(name = "_user_id")
	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id2) {
		this.user_id = user_id2;
	}

	@Column(name = "_isteacher", length = 2)
	public int getIsTeacher() {
		return isTeacher;
	}

	public void setIsTeacher(int isTeacher) {
		this.isTeacher = isTeacher;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "disscusion_id")
	public Disscusion getDisscusion() {
		return disscusion;
	}

	public void setDisscusion(Disscusion disscusion) {
		this.disscusion = disscusion;
	}

	
	@OneToMany(mappedBy="reply",cascade={CascadeType.ALL})
	@JoinColumn(name="reply_id")
	public Set<Rereply> getRereplies() {
		return rereplies;
	}

	public void setRereplies(Set<Rereply> rereplies) {
		this.rereplies = rereplies;
	}



	@Override
	public String toString() {
		return "Reply [id=" + id + ", content=" + content + ", time=" + time
				+ ", user_id=" + user_id + ", isTeacher=" + isTeacher + "]";
	}

	
}

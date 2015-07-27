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
@Table(name="t_disscusion")
public class Disscusion implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private String content;
	private Long time;
	private Long user_id;
	private int isTeacher=0;
	private Long watch=0L;
	private Long replynum=0L;
	private Lesson lesson;
	private Set<Reply> replies=new HashSet<Reply>();
	public Disscusion() {
		super();
	}

	public Disscusion(Long id, String title, String content, Long time,
			Long user_id, int isTeacher, Long watch, Long replynum,
			Lesson lesson, Set<Reply> replies) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.time = time;
		this.user_id = user_id;
		this.isTeacher = isTeacher;
		this.watch = watch;
		this.replynum = replynum;
		this.lesson = lesson;
		this.replies = replies;
	}


	@Id
	@Column(name="disscusion_id")
	@GeneratedValue
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@Column(name="_title",length=20)
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Column(name="_content",length=500)
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Column(name="_time")
	public Long getTime() {
		return time;
	}
	public void setTime(Long time) {
		this.time = time;
	}
	@Column(name="_user_id")
	public Long getUser_id() {
		return user_id;
	}
	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}
	@Column(name="_isteacher",length=2)
	public int getIsTeacher() {
		return isTeacher;
	}
	public void setIsTeacher(int isTeacher) {
		this.isTeacher = isTeacher;
	}
	@Column(name="_watch")
	public Long getWatch() {
		return watch;
	}
	public void setWatch(Long watch) {
		this.watch = watch;
	}
	@Column(name="_replynum")
	public Long getReplynum() {
		return replynum;
	}
	public void setReplynum(Long replynum) {
		this.replynum = replynum;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "lesson_id")
	public Lesson getLesson() {
		return lesson;
	}

	public void setLesson(Lesson lesson) {
		this.lesson = lesson;
	}

	@OneToMany(mappedBy="disscusion",cascade={CascadeType.ALL})
	@JoinColumn(name="disscusion_id")
	public Set<Reply> getReplies() {
		return replies;
	}
	public void setReplies(Set<Reply> replies) {
		this.replies = replies;
	}
	@Override
	public String toString() {
		return "Disscusion [id=" + id + ", title=" + title + ", content="
				+ content + ", time=" + time + ", user_id=" + user_id
				+ ", isTeacher=" + isTeacher + "]";
	}
	
	
	
}
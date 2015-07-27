package com.ds.vo;


public class DisscusionBean{


	
	private Long id;
	private String title;
	private String content;
	private String author;
	private Long time;
	private String lastReply;
	private int isTeacher=0;
	private long replynum;
	private long watch;
	
	public DisscusionBean() {
		super();
	}

	public DisscusionBean(Long id, String title, String content, String author,
			Long time, String lastReply, int isTeacher, long replynum,
			long watch) {
		super();
		this.id = id;
		this.title = title;
		this.content = content;
		this.author = author;
		this.time = time;
		this.lastReply = lastReply;
		this.isTeacher = isTeacher;
		this.replynum = replynum;
		this.watch = watch;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Long getTime() {
		return time;
	}

	public void setTime(Long time) {
		this.time = time;
	}

	public String getLastReply() {
		return lastReply;
	}

	public void setLastReply(String lastReply) {
		this.lastReply = lastReply;
	}

	public int getIsTeacher() {
		return isTeacher;
	}

	public void setIsTeacher(int isTeacher) {
		this.isTeacher = isTeacher;
	}

	public long getReplynum() {
		return replynum;
	}

	public void setReplynum(long replynum) {
		this.replynum = replynum;
	}

	public long getWatch() {
		return watch;
	}

	public void setWatch(long watch) {
		this.watch = watch;
	}

	
	
}
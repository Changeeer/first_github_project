package com.ds.vo;



public class StudentBean{
	private Long number;
	private String name;
	private ClassesBean classesBean;
	private int status;
	private long dissusion;
	private long reply;
	private Long time;
	private int ranking;
	public StudentBean() {
		super();
	}



	public StudentBean(Long number, String name, ClassesBean classesBean,
			int status, long dissusion, long reply,Long time,int ranking) {
		super();
		this.number = number;
		this.name = name;
		this.classesBean = classesBean;
		this.status = status;
		this.dissusion = dissusion;
		this.reply = reply;
		this.time=time;
		this.ranking=ranking;
	}



	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	public ClassesBean getClassesBean() {
		return classesBean;
	}

	public void setClassesBean(ClassesBean classesBean) {
		this.classesBean = classesBean;
	}



	public long getDissusion() {
		return dissusion;
	}



	public void setDissusion(long dissusion) {
		this.dissusion = dissusion;
	}



	public long getReply() {
		return reply;
	}



	public void setReply(long reply) {
		this.reply = reply;
	}



	public Long getTime() {
		return time;
	}



	public void setTime(Long time) {
		this.time = time;
	}



	public int getRanking() {
		return ranking;
	}



	public void setRanking(int ranking) {
		this.ranking = ranking;
	}



	@Override
	public String toString() {
		return "StudentBean [number=" + number + ", name=" + name
				+ ", classesBean=" + classesBean + ", status=" + status + "]";
	}
	
	
}
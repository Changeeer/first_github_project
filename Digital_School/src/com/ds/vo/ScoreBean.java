package com.ds.vo;


public class ScoreBean{

	private Long id;
	private int single=0;
	private int multiple=0;
	private int preThink=0;
	private int aftThink=0;
	private int shortAnswer=0;
	private int dataTreat=0;
	private int operate=0;
	private LessonBean lessonBean;
	public ScoreBean() {
		super();
	}
	
	public ScoreBean(Long id, int single, int multiple, int preThink,
			int aftThink, int shortAnswer, int dataTreat, int operate,
			LessonBean lessonBean) {
		super();
		this.id = id;
		this.single = single;
		this.multiple = multiple;
		this.preThink = preThink;
		this.aftThink = aftThink;
		this.shortAnswer = shortAnswer;
		this.dataTreat = dataTreat;
		this.operate = operate;
		this.lessonBean = lessonBean;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getSingle() {
		return single;
	}
	public void setSingle(int single) {
		this.single = single;
	}
	public int getMultiple() {
		return multiple;
	}
	public void setMultiple(int multiple) {
		this.multiple = multiple;
	}
	public int getPreThink() {
		return preThink;
	}
	public void setPreThink(int preThink) {
		this.preThink = preThink;
	}
	public int getAftThink() {
		return aftThink;
	}
	public void setAftThink(int aftThink) {
		this.aftThink = aftThink;
	}
	public int getShortAnswer() {
		return shortAnswer;
	}
	public void setShortAnswer(int shortAnswer) {
		this.shortAnswer = shortAnswer;
	}
	public int getDataTreat() {
		return dataTreat;
	}
	public void setDataTreat(int dataTreat) {
		this.dataTreat = dataTreat;
	}
	public int getOperate() {
		return operate;
	}
	public void setOperate(int operate) {
		this.operate = operate;
	}
	public LessonBean getLessonBean() {
		return lessonBean;
	}
	public void setLessonBean(LessonBean lessonBean) {
		this.lessonBean = lessonBean;
	}
	
	
	
}

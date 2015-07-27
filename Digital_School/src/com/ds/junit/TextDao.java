package com.ds.junit;

import java.util.ArrayList;
import java.util.List;

import junit.framework.TestCase;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JsonConfig;
import net.sf.json.util.CycleDetectionStrategy;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

import com.ds.dao.DisscusionDao;
import com.ds.dao.NewsDao;
import com.ds.dao.ReplyDao;
import com.ds.dao.StudentDao;
import com.ds.dao.TeacherDao;
import com.ds.model.Disscusion;
import com.ds.model.Lesson;
import com.ds.model.News;
import com.ds.model.Reply;
import com.ds.model.Teacher;
import com.ds.service.NewsService;
import com.ds.service.StudentService;
import com.ds.vo.StudentBean;

/**
 *
 * @author bean
 */

public class TextDao extends TestCase {

	private ApplicationContext ctx ;
	public TextDao() {
	}

	@Before
	public void setUp() throws Exception {		
		this.ctx = new FileSystemXmlApplicationContext(
				"D:/kaohe/eclipse-jee-kepler-SR2-win32-x86_64/myproject/first_github_project/first_github_project/Digital_School/WebContent/WEB-INF/applicationContext.xml");

	}

	@After
	public void tearDown() throws Exception {
		
	}


	@Test
	public void testLogin() throws Exception {
		StudentService service = (StudentService) ctx.getBean("StudentService");
		List<StudentBean> studentBeans=new ArrayList<StudentBean>();
		service.getStudentsByClasses(1);
		JSONObject jsonObject=new JSONObject();
		JSONArray jsonArray=new JSONArray();
		JsonConfig config = new JsonConfig();    
        config.setIgnoreDefaultExcludes(false);       
        config.setCycleDetectionStrategy(CycleDetectionStrategy.LENIENT);     
        config.setExcludes(new String[]{//只要设置这个数组，指定过滤哪些字段。    
          "status",    
          "classes"    
        });
		jsonArray.add(studentBeans,config);
		jsonObject.put("student", jsonArray);
		System.out.println(jsonObject.toString());
	
		

	}

	@Test
	public void testGetAll() throws Exception{
		List<Lesson> lessons=new ArrayList<Lesson>();

		for(int i=0;i<lessons.size();i++)
			System.out.println(lessons.get(i).toString());
	}
	
	
	@Test
	public void testGetNews()throws Exception{
		NewsService newsService=(NewsService) ctx.getBean("NewsService");
		System.out.println(newsService.getLatestNews().toString());
	
	}
	
	@Test 
	public void testJson()throws Exception{
		String teString="sadsadsad";
		JSONArray jsons=new JSONArray();
		News news=new News(1, "asdsad", "asdsad", 144141L);
		news.toString();
		jsons.add(news);
		jsons.add(teString);
		//System.out.println(jsons.toString());

		JSONObject jsonObject=new JSONObject();
		jsonObject.put("teString", teString);
		jsonObject.put("news", news);
		System.out.println(jsonObject.toString());
	}
		
	@Test
	public void testGetDisscByPage()throws Exception{
		DisscusionDao disscusionDao=(DisscusionDao) ctx.getBean("DisscusionDao");
		List<Disscusion> disscusions=new ArrayList<Disscusion>();
		disscusions=disscusionDao.getByPage(3, 2);
		if(disscusions==null)System.out.println("null");
		for (int i = 0; i < disscusions.size(); i++) {
			System.out.println(disscusions.get(i).toString());
		}
	}
	
	@Test
	public void testGetReplyByDiss() throws Exception{
		ReplyDao replyDao=(ReplyDao) ctx.getBean("ReplyDao");
		DisscusionDao disscusionDao=(DisscusionDao) ctx.getBean("DisscusionDao");
		Disscusion disscusion=disscusionDao.getById(1L);
		List<Reply> replies = new ArrayList<Reply>();
		replies=replyDao.getByDisscusion(disscusion);
		for (int i = 0; i < replies.size(); i++) {
			System.out.println(replies.get(i).toString());
		}
		
	}
	
	@Test
	public void testInteger()throws Exception{
		NewsDao newsDao=(NewsDao) ctx.getBean("NewsDao");
//		int i=3;
		newsDao.delete(3);
	}
	
	@Test
	public void testGetTeacherByNum()throws Exception{
		TeacherDao teacherDao=(TeacherDao)ctx.getBean("TeacherDao");
		Teacher teacher=teacherDao.getTeacherById(666L);
		if(teacher==null)
			System.out.println("TEACHER NOT EXIST");
		else {
			System.out.println(teacher.getName());
		}
	}
	
	@Test
	public void testSYSO()throws Exception{
		System.out.println("hello world!");
	}

	@Test
	public void testGetSumDao()throws Exception{
		StudentDao studentDao=(StudentDao)ctx.getBean("StudentDao");
		List<Integer> sums=studentDao.getAllTotal();
		for (Integer l : sums) {
			System.out.println(l);
		}
		
	}
	@Test
	public void testGetStuDisNum()throws Exception{
		DisscusionDao disscusionDao=(DisscusionDao)ctx.getBean("DisscusionDao");
		System.out.println(disscusionDao.getStuDisNum(3111L));
	}
}
	
	

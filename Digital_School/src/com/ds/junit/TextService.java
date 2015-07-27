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

import com.ds.model.Disscusion;
import com.ds.model.Lesson;
import com.ds.model.News;
import com.ds.service.ClassesService;
import com.ds.service.DisscusionService;
import com.ds.service.NewsService;
import com.ds.service.QuestionService;
import com.ds.service.ReplyService;
import com.ds.service.ScoreService;
import com.ds.service.StatusService;
import com.ds.service.StudentService;
import com.ds.vo.StudentBean;


/**
 *
 * @author bean
 */

public class TextService extends TestCase {

	private ApplicationContext ctx ;
	public TextService() {
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
	public void testDissByLessonId()throws Exception{
		DisscusionService disscusionService=(DisscusionService) ctx.getBean("DisscusionService");
		JSONObject jsonObject=disscusionService.getByLessonId(1,"hot",3,1);
		System.out.println(jsonObject.toString());
	}
	
	@Test
	public void testQuesGetByLesson()throws Exception{
		QuestionService questionService=(QuestionService)ctx.getBean("QuestionService");
		JSONObject jsonObject=questionService.getByLessonId(1, false);
		System.out.println(jsonObject.toString());
	}
	
	@Test
	public void testReplyList()throws Exception{
		ReplyService replyService=(ReplyService)ctx.getBean("ReplyService");
		JSONObject jsonObject=replyService.getByDisscusionId(1L);
		System.out.println(jsonObject.toString());
	}
	
	@Test
	public void testDisscusionAdd()throws Exception{
		DisscusionService disscusionService=(DisscusionService) ctx.getBean("DisscusionService");
		Disscusion disscusion=new Disscusion();
		disscusion.setContent("test");
		disscusion.setTitle("test_title");
		disscusionService.add(disscusion, 3111L, 1, 1);
	}
	
	@Test
	public void testAddStatus()throws Exception{
		StatusService statusService=(StatusService) ctx.getBean("StatusService");
		statusService.add(3112L);
		
	}
	
	@Test
	public void testFinishStatus()throws Exception{
		StatusService statusService=(StatusService) ctx.getBean("StatusService");
		statusService.finishOrOpen("Lesson1", 1,true);
	}

	
	@Test
	public void testGetStatus()throws Exception{
		StatusService statusService=(StatusService) ctx.getBean("StatusService");
		System.out.println(statusService.getByStudentId(3113L).toString());
	}
	
	@Test
	public void testAddScore()throws Exception{
		ScoreService scoreService=(ScoreService)ctx.getBean("ScoreService");
		scoreService.add(1, 3113L);
		
	}
	@Test
	public void testGetTehClass()throws Exception{
		ClassesService classesService=(ClassesService)ctx.getBean("ClassesService");
		JSONObject jsonObject=classesService.getByTeacherId(2111L);
		System.out.println(jsonObject.toString());
	}
	
	@Test
	public void testGetScoresByStu()throws Exception{
		ScoreService scoreService=(ScoreService)ctx.getBean("ScoreService");
		JSONObject jsonObject=scoreService.getByStudentId(3111L);
		System.out.println(jsonObject.toString());
	}
	
	@Test
	public void testGetStuInfo()throws Exception{
		StudentService studentService=(StudentService)ctx.getBean("StudentService");
		JSONObject jsonObject=studentService.getStudentInfoByid(3111L);
		System.out.println(jsonObject.toString());
	}
}

	
	

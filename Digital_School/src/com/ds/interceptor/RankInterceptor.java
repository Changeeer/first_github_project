package com.ds.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class RankInterceptor extends HandlerInterceptorAdapter {

	private int rank;
	
	
	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		//super.afterCompletion(request, response, handler, ex);
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		//super.postHandle(request, response, handler, modelAndView);
	}

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		// TODO Auto-generated method stub
		boolean result=false;
		HttpSession session=request.getSession();
		if(session.getAttribute("Rank")!=null&&(Integer)session.getAttribute("Rank")>=rank)result=true;
		if(!result){
//			System.out.println("NOT_LOGIN!");
//			PrintWriter writer=response.getWriter();
//			writer.print("IS_NOT_LOGIN");
//			response.setHeader("tip", "IS_NOT_LOGIN");
//		    response.getOutputStream().write("IS_NOT_LOGIN".getBytes("UTF-8") );
//		    response.getOutputStream().flush();		
//			response.sendRedirect("/WEB-INF/error.html");
//			request.getRequestDispatcher("/WEB-INF/error.html");
		}
		return result;
		//return super.preHandle(request, response, handler);
	}

}

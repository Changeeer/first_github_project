package com.ds.util;

import java.util.List;

public class Sort {
	
	public int binarySort(List<Integer> s,int low,int high, int aim){
		
		int t=(low+high)/2;
		System.out.println("low:"+low+",high:"+high+",aim:"+aim+",t:"+t+",s(t):"+s.get(t));
		if(low>high)return -1;
		if(s.get(t)<aim)
			return binarySort(s, low, t-1, aim);
		else if (s.get(t)>aim) {
			return binarySort(s, t+1, high, aim);
		}
		else 
			return t;

	}
}

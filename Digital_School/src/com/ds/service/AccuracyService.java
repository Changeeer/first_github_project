package com.ds.service;

import net.sf.json.JSONObject;

import com.ds.model.Accuracy;

public interface AccuracyService {

		public void deleteById(Long id);
		
		public void add(Accuracy accuracy);
		
		public void update(Accuracy accuracy);
		
		public JSONObject getByClassesId(int id);
		
		public JSONObject getByQuesstionId(int id);
				
		public Accuracy getById(Long id);
}

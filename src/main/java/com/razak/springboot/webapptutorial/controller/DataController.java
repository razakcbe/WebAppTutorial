package com.razak.springboot.webapptutorial.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.razak.springboot.webapptutorial.entity.JsonData;
import com.razak.springboot.webapptutorial.repo.JsonDataRepository;

@RestController
@RequestMapping("api")
public class DataController {

	protected final Log logger = LogFactory.getLog(getClass());
	 	
	 	@Autowired
	 	JsonDataRepository dataRepo;
	 	
	 	@Autowired
	 	HttpServletRequest request;
	 	
	 	@RequestMapping(value = "/get/{id}", method=RequestMethod.GET)
	 	public JsonData getJsonData(@PathVariable Long id){
	 		return dataRepo.findOne(id);
	 	}
	 	
	 	@RequestMapping(value = "/store", method=RequestMethod.POST)
	 	public JsonData persistJsonData(@RequestBody JsonData payload){
	 		return dataRepo.save(payload);
	 	}
	 	
	 	@RequestMapping(value = "/get/{name}/byname", method=RequestMethod.GET)
	 	public List<JsonData> getJsonData(@PathVariable String name){
	 		return dataRepo.findByName(name);
	 	}
	 	
	 	@RequestMapping(value = "/getsession", method=RequestMethod.GET)
	 	public String getSeesionId(){
	 		return request.getSession().getId();
	 	}
	 	
}

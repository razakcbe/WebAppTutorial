package com.razak.springboot.webapptutorial.controller;

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
	
	@RequestMapping(value = "/get/{id}", method=RequestMethod.GET)
	public JsonData getJsonData(@PathVariable Long id){
		return dataRepo.findOne(id);
	}
	
	@RequestMapping(value = "/store", method=RequestMethod.POST)
	public JsonData persistJsonData(@RequestBody JsonData payload){
		return dataRepo.save(payload);
	}

}

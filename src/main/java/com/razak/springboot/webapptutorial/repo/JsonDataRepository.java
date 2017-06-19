package com.razak.springboot.webapptutorial.repo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.razak.springboot.webapptutorial.entity.JsonData;

@RepositoryRestResource(path = "data")
public interface JsonDataRepository extends PagingAndSortingRepository<JsonData, Long> {
	
	/**
	 * http://localhost:8080/data POST
	 * {"name":"rasik", "data":"testdata"}
	 */
	
	/**
	 * http://localhost:8080/data GET
	 */
	
	/**
	 * http://localhost:8080/data/search/findByName?name=razak
	 */
	
	List<JsonData> findByName(@Param("name") String name);
}
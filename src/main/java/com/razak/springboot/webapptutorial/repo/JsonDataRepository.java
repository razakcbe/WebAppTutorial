package com.razak.springboot.webapptutorial.repo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.razak.springboot.webapptutorial.entity.JsonData;

@RepositoryRestResource
public interface JsonDataRepository extends PagingAndSortingRepository<JsonData, Long> {

}

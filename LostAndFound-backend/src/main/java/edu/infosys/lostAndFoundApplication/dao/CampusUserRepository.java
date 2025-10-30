package edu.infosys.lostAndFoundApplication.dao;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.infosys.lostAndFoundApplication.bean.CampusUser;
@Repository
public interface  CampusUserRepository extends JpaRepository<CampusUser,String> {

	@Query("SELECT a from CampusUser a where a.role='student'")
	List<CampusUser> getAllStudents();
}

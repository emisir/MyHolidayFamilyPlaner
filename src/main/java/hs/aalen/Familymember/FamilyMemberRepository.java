package hs.aalen.Familymember;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
 //extends from Crudrepository
public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Long> {

	//find all familymembers
	List<FamilyMember> findAll();

}
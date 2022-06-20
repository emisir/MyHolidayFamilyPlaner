package hs.aalen.Familymember;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface FamilyMemberRepository extends CrudRepository<FamilyMember, Long> {

	List<FamilyMember> findAll();

}
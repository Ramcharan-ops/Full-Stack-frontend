package com.suraksha.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.suraksha.entity.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {

    List<Complaint> findByVictimEmail(String email);
}
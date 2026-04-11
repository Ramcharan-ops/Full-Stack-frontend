package com.suraksha.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.suraksha.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
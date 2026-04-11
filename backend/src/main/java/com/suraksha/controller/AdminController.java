package com.suraksha.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.suraksha.entity.User;
import com.suraksha.repository.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/security-status")
    public ResponseEntity<?> getSecurityStatus() {
        // Mock security data to match frontend SecurityDashboard
        return ResponseEntity.ok("{\"status\": \"HEALTHY\", \"encryption\": \"AES-256\", \"ssl\": \"VALID\"}");
    }
}

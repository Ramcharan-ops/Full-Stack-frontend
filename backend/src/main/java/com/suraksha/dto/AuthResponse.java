package com.suraksha.dto;

import com.suraksha.enums.Role;

public class AuthResponse {

    private Long id;
    private String name;
    private String email;
    private String phone;
    private Role role;
    private String message;

    public AuthResponse(Long id, String name, String email, String phone, Role role, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public Role getRole() {
        return role;
    }

    public String getMessage() {
        return message;
    }
}
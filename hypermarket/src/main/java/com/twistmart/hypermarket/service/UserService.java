package com.twistmart.hypermarket.service;

import com.twistmart.hypermarket.dto.UserDTO;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO);
    UserDTO loginUser(String email, String password);
    UserDTO getUserById(Long id);
}

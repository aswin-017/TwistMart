package com.twistmart.hypermarket.service;

import com.twistmart.hypermarket.dto.UserDTO;
import com.twistmart.hypermarket.exception.EmailAlreadyExistsException;
import com.twistmart.hypermarket.exception.PhoneAlreadyExistsException;
import com.twistmart.hypermarket.exception.UserNotFoundException;
import com.twistmart.hypermarket.model.User;
import com.twistmart.hypermarket.repository.UserRepository;
import com.twistmart.hypermarket.util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public UserDTO registerUser(UserDTO userDTO) {
        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        if (userRepository.findByPhone(userDTO.getPhone()).isPresent()) {
            throw new PhoneAlreadyExistsException("Phone number already exists");
        }

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(PasswordUtil.encryptPassword(userDTO.getPassword()));
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setPhone(userDTO.getPhone());
        user.setEmailVerified(userDTO.isEmailVerified());
        user.setCreatedAt(userDTO.getCreatedAt());

        User savedUser = userRepository.save(user);

        return convertToDTO(savedUser);
    }

    @Override
    @Transactional
    public UserDTO loginUser(String email, String password) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User not found"));

        if (PasswordUtil.checkPassword(password, user.getPassword())) {
            return convertToDTO(user);
        } else {
            throw new UserNotFoundException("Invalid email or password");
        }
    }

    @Override
    @Transactional
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        return convertToDTO(user);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setPhone(user.getPhone());
        userDTO.setEmailVerified(user.isEmailVerified());
        userDTO.setCreatedAt(user.getCreatedAt());
        return userDTO;
    }
}

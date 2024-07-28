    package com.twistmart.hypermarket.service;

    import com.twistmart.hypermarket.model.User;
    import com.twistmart.hypermarket.repository.UserRepository;
    import com.twistmart.hypermarket.dto.LoginRequest;
    import com.twistmart.hypermarket.dto.LoginResponse;
    import com.twistmart.hypermarket.dto.SignUpRequest;
    import com.twistmart.hypermarket.dto.UserDTO;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.stereotype.Service;

    import java.util.Optional;

    @Service
    public class UserService {

        @Autowired
        private UserRepository userRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        public boolean registerUser(SignUpRequest signUpRequest) {
            if (userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
                return false; // Email already exists
            }

            User user = new User();
            user.setEmail(signUpRequest.getEmail());
            user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
            user.setFirstName(signUpRequest.getFirstName());
            user.setLastName(signUpRequest.getLastName());
            user.setPhone(signUpRequest.getPhone());
            user.setEmailVerified(false); // Default to false until email verification

            userRepository.save(user);
            return true;
        }

        public LoginResponse authenticateUser(LoginRequest loginRequest) {
            Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                    return new LoginResponse(user.getId(), user.getEmail(), user.getFirstName(), user.getLastName());
                }
            }
            return null; // Authentication failed
        }
        public Optional<UserDTO> getUserById(Long id) {
            return userRepository.findById(id).map(UserDTO::fromEntity);
        }
    }

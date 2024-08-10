package com.twistmart.hypermarket.util;

import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtil {

    // Encrypt password using bcrypt
    public static String encryptPassword(String password) {
        // Generate a salt and hash the password with it
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    // Check if password matches
    public static boolean checkPassword(String plainPassword, String hashedPassword) {
        // Check the password against the hashed password
        return BCrypt.checkpw(plainPassword, hashedPassword);
    }
}

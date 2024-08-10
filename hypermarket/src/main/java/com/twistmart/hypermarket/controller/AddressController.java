package com.twistmart.hypermarket.controller;

import com.twistmart.hypermarket.dto.AddressDTO;
import com.twistmart.hypermarket.exception.UserNotFoundException;
import com.twistmart.hypermarket.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/user/{userId}")
    public ResponseEntity<?> addAddress(@PathVariable Long userId, @RequestBody AddressDTO addressDTO) {
        try {
            AddressDTO addedAddress = addressService.addAddress(userId, addressDTO);
            return ResponseEntity.ok(addedAddress);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with id: " + userId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding address: " + e.getMessage());
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAddressesByUserId(@PathVariable Long userId) {
        try {
            List<AddressDTO> addresses = addressService.getAddressesByUserId(userId);
            return ResponseEntity.ok(addresses);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
}

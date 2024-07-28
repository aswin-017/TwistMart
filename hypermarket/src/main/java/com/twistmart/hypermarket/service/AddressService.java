package com.twistmart.hypermarket.service;

import com.twistmart.hypermarket.dto.AddressDTO;
import com.twistmart.hypermarket.model.Address;
import com.twistmart.hypermarket.model.User;
import com.twistmart.hypermarket.repository.AddressRepository;
import com.twistmart.hypermarket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    public List<AddressDTO> getUserAddresses(Long userId) {
        return addressRepository.findByUserId(userId)
                .stream()
                .map(AddressDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public Optional<AddressDTO> getAddressById(Long addressId) {
        return addressRepository.findById(addressId).map(AddressDTO::fromEntity);
    }

    public AddressDTO addAddress(AddressDTO addressDTO) {
        Address address = AddressDTO.toEntity(addressDTO);
        Optional<User> user = userRepository.findById(addressDTO.getUserId());
        if (user.isPresent()) {
            address.setUser(user.get());
            Address savedAddress = addressRepository.save(address);
            return AddressDTO.fromEntity(savedAddress);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public AddressDTO updateAddress(Long addressId, AddressDTO addressDTO) {
        Address address = AddressDTO.toEntity(addressDTO);
        address.setId(addressId);
        Address updatedAddress = addressRepository.save(address);
        return AddressDTO.fromEntity(updatedAddress);
    }

    public void deleteAddress(Long addressId) {
        addressRepository.deleteById(addressId);
    }
}

package com.twistmart.hypermarket.service;

import com.twistmart.hypermarket.dto.AddressDTO;
import com.twistmart.hypermarket.exception.UserNotFoundException;
import com.twistmart.hypermarket.model.Address;
import com.twistmart.hypermarket.model.User;
import com.twistmart.hypermarket.repository.AddressRepository;
import com.twistmart.hypermarket.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public AddressDTO addAddress(Long userId, AddressDTO addressDTO) {
        User user = userRepository.findById(userId).orElseThrow(() -> new UserNotFoundException("User not found"));

        Address address = new Address();
        address.setUser(user);
        address.setStreet(addressDTO.getStreet());
        address.setCity(addressDTO.getCity());
        address.setState(addressDTO.getState());
        address.setPostalCode(addressDTO.getPostalCode());
        address.setCountry(addressDTO.getCountry());
        address.setCreatedAt(addressDTO.getCreatedAt());

        Address savedAddress = addressRepository.save(address);

        return convertToDTO(savedAddress);
    }

    @Override
    public List<AddressDTO> getAddressesByUserId(Long userId) {
        List<Address> addresses = addressRepository.findByUserId(userId);
        return addresses.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private AddressDTO convertToDTO(Address address) {
        AddressDTO addressDTO = new AddressDTO();
        addressDTO.setId(address.getId());
        addressDTO.setUserId(address.getUser().getId());
        addressDTO.setStreet(address.getStreet());
        addressDTO.setCity(address.getCity());
        addressDTO.setState(address.getState());
        addressDTO.setPostalCode(address.getPostalCode());
        addressDTO.setCountry(address.getCountry());
        addressDTO.setCreatedAt(address.getCreatedAt());
        return addressDTO;
    }
}

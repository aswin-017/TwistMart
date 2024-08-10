package com.twistmart.hypermarket.service;

import com.twistmart.hypermarket.dto.AddressDTO;

import java.util.List;

public interface AddressService {
    AddressDTO addAddress(Long userId, AddressDTO addressDTO);
    List<AddressDTO> getAddressesByUserId(Long userId);
}

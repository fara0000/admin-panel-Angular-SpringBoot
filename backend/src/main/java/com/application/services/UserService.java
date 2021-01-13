package com.application.services;

import com.application.entities.User;
import lombok.extern.slf4j.Slf4j;
import com.application.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j // для logginga ?
@Service
public class UserService implements UserDetailsService {
    //why should we need private final injection
    private final UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public boolean saveUser(User user) {
        if(userRepository.findByUsername(user.getUsername()) != null){
            log.debug("User {} already exists in DB", user.getUsername());
            return false;
        } else {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            log.debug("User {} saved in DB", user.getUsername());
            return true;
        }
    }
}

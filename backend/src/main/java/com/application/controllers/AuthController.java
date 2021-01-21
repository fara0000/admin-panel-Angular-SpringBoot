package com.application.controllers;


import com.application.entities.User;
import com.application.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@Slf4j
@RestController
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody @Valid User user, BindingResult result) {
        try {
//            log.debug("POST request to register user {}", user);
            System.err.println("Tuk Tuk");
            if (result.hasErrors()) {
//                log.error("Validation Error");
                return new ResponseEntity<>("Validation Error", HttpStatus.BAD_REQUEST);
            }
            boolean isSaved = userService.saveUser(user);
            return isSaved ? new ResponseEntity<>("User registered successfully!", HttpStatus.OK) :
                    new ResponseEntity<>("User has already registered!", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
//            log.error("Unexpected Error {}", e.getMessage());
            return new ResponseEntity<>("Unexpected Error", HttpStatus.BAD_REQUEST);
        }
    }
}
package com.application.controllers;


import com.application.entities.User;
import com.application.services.UserService;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid User user, BindingResult bindingResult) {
        try {
//            log.debug("POST request to login user {}", user);
            if (bindingResult.hasErrors()) {
//                log.error("Validation error");
                return new ResponseEntity<>("Ошибка валидации", HttpStatus.BAD_REQUEST);
            }
            String token = userService.getUserToken(user);
            final Gson gson = new Gson();
            return new ResponseEntity<>(gson.toJson(token), HttpStatus.OK);
        } catch (BadCredentialsException e) {
//            log.error("Invalid user credentials {}", e.getMessage());
            return new ResponseEntity<>("Неверные учетные данные пользователя", HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
//            log.error("Unexpected error {}", e.getMessage());
            return new ResponseEntity<>("Непредвиденная ошибка", HttpStatus.BAD_REQUEST);
        }
    }
}